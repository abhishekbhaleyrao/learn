
# Salesforce Apex — Complete Guide with Examples
_Last updated: 2025-08-24 16:43 _

> This guide is a practical, example-heavy reference for Apex developers. It covers fundamentals, data access, triggers, async Apex, testing, integration, security, and patterns—optimized for interviews and real projects.

---

## Table of Contents
- [Salesforce Apex — Complete Guide with Examples](#salesforce-apex--complete-guide-with-examples)
  - [Table of Contents](#table-of-contents)
  - [What is Apex?](#what-is-apex)
  - [Language Basics](#language-basics)
    - [Hello World](#hello-world)
    - [Variables \& Data Types](#variables--data-types)
    - [Operators](#operators)
    - [Control Flow](#control-flow)
    - [Methods \& Overloading](#methods--overloading)
    - [Classes, Enums, Interfaces, Abstract](#classes-enums-interfaces-abstract)
  - [Collections](#collections)
    - [List](#list)
    - [Set](#set)
    - [Map](#map)
    - [Bulk Patterns with Collections](#bulk-patterns-with-collections)
  - [sObjects \& DML](#sobjects--dml)
    - [Insert, Update, Upsert, Delete, Undelete](#insert-update-upsert-delete-undelete)
    - [DML Options (AllOrNone)](#dml-options-allornone)
    - [Database Class \& Savepoints](#database-class--savepoints)
  - [SOQL \& SOSL](#soql--sosl)
    - [Basic Queries](#basic-queries)
    - [Relationship Queries](#relationship-queries)
    - [Aggregate Queries](#aggregate-queries)
    - [Bind Variables](#bind-variables)
    - [Dynamic SOQL/SOSL](#dynamic-soqlsosl)
  - [Triggers](#triggers)
    - [Trigger Contexts](#trigger-contexts)
    - [Bulkification](#bulkification)
    - [Recursion Guard](#recursion-guard)
    - [Trigger Handler Pattern](#trigger-handler-pattern)
  - [Asynchronous Apex](#asynchronous-apex)
    - [@future](#future)
    - [Queueable](#queueable)
    - [Batch Apex](#batch-apex)
    - [Schedulable](#schedulable)
    - [Platform Events](#platform-events)
  - [Integration \& Callouts](#integration--callouts)
    - [HTTP Callouts](#http-callouts)
    - [Named Credentials](#named-credentials)
    - [JSON (De)Serialization](#json-deserialization)
    - [SOAP \& WSDL2Apex](#soap--wsdl2apex)
  - [Security \& Sharing](#security--sharing)
    - [With/Without Sharing](#withwithout-sharing)
    - [FLS \& CRUD Checks](#fls--crud-checks)
    - [Enforcing Sharing in SOQL](#enforcing-sharing-in-soql)
  - [Testing](#testing)
    - [Test Classes \& Annotations](#test-classes--annotations)
    - [Test Data Factories](#test-data-factories)
    - [SeeAllData \& Isolation](#seealldata--isolation)
    - [Mocking Callouts](#mocking-callouts)
    - [Code Coverage Tips](#code-coverage-tips)
  - [Governor Limits \& Performance](#governor-limits--performance)
  - [Error Handling \& Logging](#error-handling--logging)
  - [Apex for Automation \& UI](#apex-for-automation--ui)
    - [@InvocableMethod for Flow](#invocablemethod-for-flow)
    - [AuraEnabled \& LWC](#auraenabled--lwc)
  - [Design Patterns](#design-patterns)
    - [Service, Selector (Repository), Unit of Work](#service-selector-repository-unit-of-work)
  - [Handy Snippets](#handy-snippets)
  - [Interview Prep Checklist](#interview-prep-checklist)
    - [Appendix: Sample End-to-End Flow](#appendix-sample-end-to-end-flow)

---

## What is Apex?
Apex is Salesforce’s strongly-typed, Java-like programming language that runs on the Lightning Platform. It enables custom business logic, data access, integrations, and automation tightly coupled with Salesforce data model and security.

---

## Language Basics

### Hello World
```apex
public with sharing class HelloWorld {{
    public static void say() {{
        System.debug('Hello, Apex!');
    }}
}}
```

### Variables & Data Types
- **Primitives**: `Boolean`, `Integer`, `Long`, `Double`, `Decimal`, `String`, `Date`, `Datetime`, `Time`, `Id`
- **Special**: `sObject`, `Blob`

```apex
Integer count = 10;
Decimal total = 99.99;
Date today = Date.today();
Id accId; // 18-char Salesforce Id
```

### Operators
Arithmetic `+ - * / %`, logical `&& || !`, comparison `== != > < >= <=`, ternary `cond ? a : b`.

```apex
Integer x = 5, y = 2;
Integer z = (x > y) ? x : y; // 5
```

### Control Flow
```apex
if (x > 10) {{ /* ... */ }}
else if (x > 5) {{ /* ... */ }}
else {{ /* ... */ }}

for (Integer i = 0; i < 3; i++) {{ System.debug(i); }}

for (Account a : [SELECT Id, Name FROM Account LIMIT 5]) {{
    System.debug(a.Name);
}}

while (x < 10) x++;
```

### Methods & Overloading
```apex
public class MathUtil {{
    public static Integer add(Integer a, Integer b){{ return a + b; }}
    public static Decimal add(Decimal a, Decimal b){{ return a + b; }} // overloaded
}}
```

### Classes, Enums, Interfaces, Abstract
```apex
public enum Status {{ New, InProgress, Done }}

public interface Notifier {{
    void notify(String message);
}}

public abstract class BaseNotifier implements Notifier {{
    public abstract void notify(String message);
    protected void log(String msg){{ System.debug(msg); }}
}}

public with sharing class EmailNotifier extends BaseNotifier {{
    public override void notify(String message){{
        log('Email sent: ' + message);
    }}
}}
```

---

## Collections

### List
```apex
List<String> names = new List<String>{{'A','B'}};
names.add('C');
System.debug(names.size()); // 3
```

### Set
```apex
Set<String> uniqueTags = new Set<String>{{'blue','blue','red'}};
System.debug(uniqueTags); // {{'blue','red'}}
```

### Map
```apex
Map<Id, Account> accById = new Map<Id, Account>(
    [SELECT Id, Name FROM Account WHERE Name LIKE 'Acme%']
);
Account a = accById.get(someId);
```

### Bulk Patterns with Collections
- Always **query once**, **act many**.
- Use **maps** for cross-object joins in memory.

```apex
// Join Opportunities to their Accounts without N+1 queries
Set<Id> accountIds = new Set<Id>();
for (Opportunity o : Trigger.new) accountIds.add(o.AccountId);

Map<Id, Account> accounts = new Map<Id, Account>(
    [SELECT Id, Rating FROM Account WHERE Id IN :accountIds]
);

for (Opportunity o : Trigger.new) {{
    Account a = accounts.get(o.AccountId);
    if (a != null && a.Rating == 'Hot') {{
        o.StageName = 'Qualification';
    }}
}}
```

---

## sObjects & DML

### Insert, Update, Upsert, Delete, Undelete
```apex
Account a = new Account(Name='Acme');
insert a;

a.Rating = 'Hot';
update a;

upsert new Account(External_Id__c='EXT-100', Name='Ext Acme') External_Id__c;

delete a;
// undelete only works on recently deleted records retrieved from the recycle bin
```

### DML Options (AllOrNone)
```apex
Database.SaveResult sr = Database.insert(
    new Account(Name='Partial Ok'),
    false // allOrNone = false => partial success allowed
);
System.debug(sr.isSuccess());
```

### Database Class & Savepoints
```apex
Savepoint sp = Database.setSavepoint();
try {{
    insert new Account(Name='A');
    insert new Contact(LastName='C', AccountId=null); // will fail
}} catch (Exception e) {{
    Database.rollback(sp); // revert both
}}
```

---

## SOQL & SOSL

### Basic Queries
```apex
List<Account> accts = [SELECT Id, Name FROM Account WHERE Name LIKE :('Acme%') LIMIT 50];
```

### Relationship Queries
```apex
// Parent-to-child (subquery)
List<Account> accts = [SELECT Id, Name, (SELECT Id, Name FROM Contacts) FROM Account];

// Child-to-parent (dot notation)
List<Contact> cons = [SELECT Id, Account.Name FROM Contact WHERE Account.Rating = 'Hot'];
```

### Aggregate Queries
```apex
AggregateResult[] results = [
    SELECT AccountId, COUNT(Id) cnt, SUM(Amount) total
    FROM Opportunity WHERE IsClosed = false GROUP BY AccountId
];
for (AggregateResult ar : results) {{
    System.debug(ar.get('AccountId') + ' -> ' + ar.get('cnt') + ', ' + ar.get('total'));
}}
```

### Bind Variables
```apex
String prefix = 'Acme';
List<Account> accts = [SELECT Id FROM Account WHERE Name LIKE :prefix+'%'];
```

### Dynamic SOQL/SOSL
```apex
String soql = 'SELECT Id, Name FROM Account WHERE Name LIKE :name';
List<sObject> rows = Database.query('SELECT Id, Name FROM Account');
List<List<SObject>> sosl = Search.query('FIND {{Acme*}} IN ALL FIELDS RETURNING Account(Id, Name)');
```

---

## Triggers

### Trigger Contexts
- **Events**: `before insert`, `before update`, `before delete`, `after insert`, `after update`, `after delete`, `after undelete`
- **Context Variables**: `Trigger.new`, `Trigger.old`, `Trigger.isInsert`, `Trigger.isUpdate`, etc.

```apex
trigger ContactBefore on Contact (before insert, before update) {{
    for (Contact c : Trigger.new) {{
        if (String.isBlank(c.LastName)) {{
            c.LastName = 'Unknown';
        }}
    }}
}}
```

### Bulkification
- Never query or DML inside a loop.
- Use sets/maps; iterate once.

```apex
trigger OpportunityStageSetter on Opportunity (before insert, before update) {{
    Set<Id> accountIds = new Set<Id>();
    for (Opportunity o : Trigger.new) if (o.AccountId != null) accountIds.add(o.AccountId);

    Map<Id, Account> accs = new Map<Id, Account>(
        [SELECT Id, Rating FROM Account WHERE Id IN :accountIds]
    );

    for (Opportunity o : Trigger.new) {{
        Account a = accs.get(o.AccountId);
        if (a != null && a.Rating == 'Hot') o.StageName = 'Qualification';
    }}
}}
```

### Recursion Guard
```apex
public class TriggerRunOnce {{
    private static Set<String> executed = new Set<String>();
    public static Boolean run(String key){{
        if (executed.contains(key)) return false;
        executed.add(key);
        return true;
    }}
}}

// usage in trigger
if (!TriggerRunOnce.run('OpportunityStageSetter.before')) return;
```

### Trigger Handler Pattern
```apex
// Trigger
trigger AccountTrigger on Account (before insert, before update, after insert) {{
    AccountTriggerHandler.run(Trigger.isBefore, Trigger.isAfter, Trigger.operationType);
}}

// Handler
public with sharing class AccountTriggerHandler {{
    public static void run(Boolean isBefore, Boolean isAfter, TriggerOperation op){{
        if (isBefore && op == TriggerOperation.BEFORE_INSERT) beforeInsert();
        if (isBefore && op == TriggerOperation.BEFORE_UPDATE) beforeUpdate();
        if (isAfter && op == TriggerOperation.AFTER_INSERT) afterInsert();
    }}
    private static void beforeInsert(){{
        for (Account a : Trigger.new) if (String.isBlank(a.Rating)) a.Rating = 'Warm';
    }}
    private static void beforeUpdate(){{
        // ...
    }}
    private static void afterInsert(){{
        // enqueue async jobs, send events, etc.
    }}
}}
```

---

## Asynchronous Apex

### @future
- Simple, fire-and-forget; supports callouts when `callout=true`.

```apex
public class FutureDemo {{
    @future(callout=true)
    public static void ping(String url){{
        Http h = new Http();
        HttpRequest r = new HttpRequest();
        r.setEndpoint(url);
        r.setMethod('GET');
        h.send(r);
    }}
}}
```

### Queueable
- Chainable, supports complex types, better control than `@future`.

```apex
public class RepriceQueue implements Queueable {{
    private Set<Id> oppIds;
    public RepriceQueue(Set<Id> oppIds){{ this.oppIds = oppIds; }}
    public void execute(QueueableContext ctx){{
        List<Opportunity> opps = [SELECT Id, Amount FROM Opportunity WHERE Id IN :oppIds];
        for (Opportunity o : opps) o.Amount = o.Amount == null ? 0 : o.Amount.setScale(2);
        update opps;
        // System.enqueueJob(new AnotherJob(...)); // chaining
    }}
}}
```

### Batch Apex
- For large data volumes with chunking.

```apex
public class CloseLostBatch implements Database.Batchable<Opportunity> {{
    public Database.QueryLocator start(Database.BatchableContext bc){{
        return Database.getQueryLocator('SELECT Id, StageName FROM Opportunity WHERE IsClosed = false');
    }}
    public void execute(Database.BatchableContext bc, List<Opportunity> scope){{
        for (Opportunity o : scope) if (o.StageName == 'Prospecting') o.StageName = 'Closed Lost';
        update scope;
    }}
    public void finish(Database.BatchableContext bc){{
        System.debug('Batch finished');
    }}
}}
```

### Schedulable
```apex
public class NightlyJob implements Schedulable {{
    public void execute(SchedulableContext sc){{
        System.enqueueJob(new RepriceQueue(new Set<Id>()));
    }}
}}
// System.schedule('Nightly', '0 0 23 * * ?', new NightlyJob()); // 11 PM daily CRON
```

### Platform Events
```apex
// Publish
MyEvent__e evt = new MyEvent__e(Message__c='Hello');
Database.SaveResult sr = EventBus.publish(evt);

// Subscribe in a trigger on MyEvent__e or in a platform event-triggered flow
```

---

## Integration & Callouts

### HTTP Callouts
```apex
public with sharing class WeatherClient {{
    public static String getTemp(String city){{
        Http h = new Http();
        HttpRequest r = new HttpRequest();
        r.setEndpoint('callout:Weather_API/current?city=' + EncodingUtil.urlEncode(city, 'UTF-8'));
        r.setMethod('GET');
        HttpResponse res = h.send(r);
        if (res.getStatusCode() == 200) {{
            Map<String, Object> body = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
            return String.valueOf(body.get('temp'));
        }}
        throw new CalloutException('Failed: ' + res.getStatus());
    }}
    public class CalloutException extends Exception {{}}
}}
```

### Named Credentials
- Create Named Credential `Weather_API` pointing to base URL with auth; reference via `callout:Weather_API` in Apex.

### JSON (De)Serialization
```apex
public class Invoice {{
    public String number;
    public Decimal amount;
}}
String jsonStr = JSON.serialize(new Invoice{{ number='INV-1', amount=100 }});
Invoice inv = (Invoice) JSON.deserialize(jsonStr, Invoice.class);
```

### SOAP & WSDL2Apex
- Use **WSDL2Apex** in Setup → Apex → Generate from WSDL.
- Generated stubs allow `new WebService().operation()` style calls.

---

## Security & Sharing

### With/Without Sharing
```apex
public with sharing class SecuredService {{ /* respects sharing */ }}
public without sharing class AdminService {{ /* runs in system mode */ }}
```

### FLS & CRUD Checks
- Use `Schema.sObjectType` and `SObjectField.getDescribe()`.

```apex
if (!Schema.sObjectType.Contact.isCreateable()) {{ throw new SecurityException(); }}
if (!Contact.Email.getDescribe().isAccessible()) {{ /* mask or skip */ }}
```

### Enforcing Sharing in SOQL
- `WITH USER_MODE` (enforce sharing/FLS) and `WITH SYSTEM_MODE` (bypass) on some contexts.
- Prefer `with sharing` classes for default enforcement.

---

## Testing

### Test Classes & Annotations
- `@isTest` on classes/methods; `@testSetup` to create reusable data; runAs for profiles/users.

```apex
@IsTest
private class AccountTriggerHandlerTest {{
    @testSetup static void data(){{
        insert new Account(Name='Acme');
    }}

    @IsTest static void setsDefaultRating(){{
        Account a = [SELECT Id, Rating FROM Account LIMIT 1];
        a.Rating = null;
        update a;
        System.assertEquals('Warm', [SELECT Rating FROM Account WHERE Id=:a.Id].Rating);
    }}
}}
```

### Test Data Factories
```apex
public class TestDataFactory {{
    public static Account makeAccount(){{
        return new Account(Name='Test ' + System.now().getTime());
    }}
}}
```

### SeeAllData & Isolation
- Avoid `SeeAllData=true`. Create test data programmatically.

### Mocking Callouts
```apex
@IsTest
private class WeatherClientTest {{
    private class WeatherMock implements HttpCalloutMock {{
        public HTTPResponse respond(HTTPRequest req){{
            HttpResponse res = new HttpResponse();
            res.setStatusCode(200);
            res.setBody('{{"temp": "28"}}');
            return res;
        }}
    }}
    @IsTest static void testGetTemp(){{
        Test.setMock(HttpCalloutMock.class, new WeatherMock());
        Test.startTest();
        String t = WeatherClient.getTemp('Pune');
        Test.stopTest();
        System.assertEquals('28', t);
    }}
}}
```

### Code Coverage Tips
- Cover triggers via handler tests.
- Use `Test.startTest()` / `Test.stopTest()` to execute async jobs.
- Assert **outcomes**, not statements.

---

## Governor Limits & Performance
- 100 SOQL queries, 150 DML operations per transaction (synchronous).
- 50,000 rows returned by SOQL (synchronous), heap limits, CPU time limits.
- Use the **Limits** class to introspect.

```apex
System.debug('SOQL used: ' + Limits.getQueries());
```

**Best Practices**
- Bulkify everything (triggers, services).
- Prefer one SOQL per object per trigger execution.
- Cache describes; avoid unnecessary serialization.
- Use selective filters & selective indexes; avoid LIKE '%text%'.

---

## Error Handling & Logging
```apex
try {{
    // do work
}} catch (DmlException ex) {{
    System.debug(LoggingLevel.ERROR, ex.getDmlMessage(0));
    throw ex;
}} catch (Exception e) {{
    System.debug(LoggingLevel.ERROR, e.getMessage());
}}
```

- Create a central Logger utility; store logs in a Custom Object for audit (optional).

---

## Apex for Automation & UI

### @InvocableMethod for Flow
```apex
public with sharing class FlowActions {{
    public class Input {{ @InvocableVariable public Id accountId; }}
    public class Output {{ @InvocableVariable public String message; }}

    @InvocableMethod(label='Say Hello' description='Returns a greeting for an account')
    public static List<Output> sayHello(List<Input> inputs){{
        Set<Id> ids = new Set<Id>();
        for (Input i : inputs) ids.add(i.accountId);
        Map<Id, Account> mapA = new Map<Id, Account>([SELECT Id, Name FROM Account WHERE Id IN :ids]);
        List<Output> results = new List<Output>();
        for (Input i : inputs){{
            Output o = new Output();
            o.message = 'Hello, ' + (mapA.get(i.accountId)?.Name);
            results.add(o);
        }}
        return results;
    }}
}}
```

### AuraEnabled & LWC
```apex
public with sharing class ContactService {{
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(Id accountId){{
        return [SELECT Id, Name, Email FROM Contact WHERE AccountId = :accountId LIMIT 200];
    }}
}}
```

---

## Design Patterns

### Service, Selector (Repository), Unit of Work
```apex
// Selector (Repository)
public with sharing class AccountSelector {{
    public static List<Account> byIds(Set<Id> ids){{
        return [SELECT Id, Name, Rating FROM Account WHERE Id IN :ids];
    }}
}}

// Service
public with sharing class OpportunityService {{
    public static void setStageForHotAccounts(List<Opportunity> opps){{
        Set<Id> accIds = new Set<Id>();
        for (Opportunity o : opps) if (o.AccountId != null) accIds.add(o.AccountId);
        Map<Id, Account> accs = new Map<Id, Account>(AccountSelector.byIds(accIds));
        for (Opportunity o : opps) if (accs.get(o.AccountId)?.Rating == 'Hot') o.StageName = 'Qualification';
    }}
}}
```

---

## Handy Snippets
- **Upsert by External Id**: `upsert records External_Id__c;`
- **Safe Null Navigation**: Use explicit null checks (Apex does not support `?.` in Apex code; use `if (obj != null) obj.field;`)
- **Date Math**: `Date.today().addDays(7)`
- **SOQL for Recently Viewed**: `SELECT Id FROM RecentlyViewed WHERE Type = 'Account'`

---

## Interview Prep Checklist
- Explain trigger contexts & bulkification with examples.
- Compare `@future` vs Queueable vs Batch vs Schedulable.
- How to enforce FLS/CRUD and sharing.
- Testing strategy (testSetup, mocks, start/stop test).
- Handling governor limits and N+1 problems.
- Design patterns used in Apex projects.
- Error handling and idempotency/recursion guards.
- Using Named Credentials for callouts.

---

### Appendix: Sample End-to-End Flow
**Requirement**: When an Opportunity is inserted/updated, if its Account is Hot, set stage to Qualification and enqueue repricing.

**Implementation**
1. Trigger → Handler → Service (bulkified)
2. Queueable for repricing
3. Tests for both trigger logic and queueable

```apex
trigger OpportunityTrigger on Opportunity (before insert, before update, after insert) {{
    OpportunityTriggerHandler.run();
}}

public with sharing class OpportunityTriggerHandler {{
    public static void run(){{
        if (Trigger.isBefore && (Trigger.isInsert || Trigger.isUpdate)) {{
            OpportunityService.setStageForHotAccounts((List<Opportunity>)Trigger.new);
        }}
        if (Trigger.isAfter && Trigger.isInsert) {{
            System.enqueueJob(new RepriceQueue(new Map<Id, Opportunity>(Trigger.new).keySet()));
        }}
    }}
}}
```
