# 📘 Salesforce Triggers – Complete Guide

---

## 🔹 What is a Trigger?
- A **Trigger** is an **Apex script** that executes **before or after** DML operations (Insert, Update, Delete, Undelete).  
- Triggers help **automate actions** like updating fields, creating related records, or enforcing business rules.  

---

## 🔹 Types of Triggers
1. **Before Trigger** – Executes **before** saving record to DB.  
   - Used to **update/validate values**.  
   - Example: Set default values before insert.  

2. **After Trigger** – Executes **after** saving record to DB.  
   - Used to **access record Ids** or perform operations on related objects.  
   - Example: Create a related Contact after Account is saved.  

---

## 🔹 Trigger Events
- **before insert**  
- **before update**  
- **before delete**  
- **after insert**  
- **after update**  
- **after delete**  
- **after undelete**  

---

## 🔹 Basic Trigger Syntax
```apex
trigger AccountTrigger on Account (before insert, after insert) {
    if(Trigger.isBefore && Trigger.isInsert){
        for(Account acc : Trigger.new){
            acc.Description = 'Created via Trigger';
        }
    }
    if(Trigger.isAfter && Trigger.isInsert){
        System.debug('Account Created with Id: ' + Trigger.new[0].Id);
    }
}
```

---

## 🔹 Context Variables
- `Trigger.isInsert` → true if INSERT operation.  
- `Trigger.isUpdate` → true if UPDATE operation.  
- `Trigger.isDelete` → true if DELETE operation.  
- `Trigger.isBefore` / `Trigger.isAfter`  
- `Trigger.new` → new records (for insert/update).  
- `Trigger.old` → old records (for update/delete).  
- `Trigger.newMap` → Map of Id → new record.  
- `Trigger.oldMap` → Map of Id → old record.  

---

## 🔹 Example: Before Insert Trigger
```apex
trigger ContactBeforeInsert on Contact (before insert) {
    for(Contact c : Trigger.new){
        if(c.Email == null){
            c.Email = 'default@email.com';
        }
    }
}
```

---

## 🔹 Example: After Insert Trigger
```apex
trigger AccountAfterInsert on Account (after insert) {
    List<Contact> contacts = new List<Contact>();
    for(Account acc : Trigger.new){
        contacts.add(new Contact(
            LastName = acc.Name + ' Contact',
            AccountId = acc.Id
        ));
    }
    insert contacts;
}
```

---

## 🔹 Example: Before Update Trigger
```apex
trigger OpportunityBeforeUpdate on Opportunity (before update) {
    for(Opportunity opp : Trigger.new){
        if(opp.Amount < 0){
            opp.Amount = 0; // Prevent negative amount
        }
    }
}
```

---

## 🔹 Example: After Delete Trigger
```apex
trigger CaseAfterDelete on Case (after delete) {
    for(Case c : Trigger.old){
        System.debug('Deleted Case Id: ' + c.Id);
    }
}
```

---

## 🔹 Trigger Best Practices
- **One Trigger per Object** → avoid multiple triggers on same object.  
- **Bulkify Logic** → handle 200 records at once.  
- **Avoid SOQL/DML inside loops**.  
- **Use Helper Classes** for logic.  
- **Use Context Variables** wisely.  
- **Add Error Handling** with `try-catch`.  

---

## 🔹 Trigger Helper Class Example
```apex
trigger AccountTrigger on Account (before insert, before update) {
    if(Trigger.isBefore){
        if(Trigger.isInsert){
            AccountTriggerHandler.handleBeforeInsert(Trigger.new);
        }
        if(Trigger.isUpdate){
            AccountTriggerHandler.handleBeforeUpdate(Trigger.new, Trigger.oldMap);
        }
    }
}

public class AccountTriggerHandler {
    public static void handleBeforeInsert(List<Account> newAccs){
        for(Account acc : newAccs){
            if(String.isBlank(acc.Description)){
                acc.Description = 'New Account Created';
            }
        }
    }
    public static void handleBeforeUpdate(List<Account> newAccs, Map<Id, Account> oldAccMap){
        for(Account acc : newAccs){
            Account oldAcc = oldAccMap.get(acc.Id);
            if(acc.AnnualRevenue != oldAcc.AnnualRevenue){
                acc.Description = 'Revenue Changed';
            }
        }
    }
}
```

---

## 🔹 Trigger vs Process Builder vs Flow
| Feature        | Trigger (Apex)  | Process Builder  | Flow  |
|----------------|-----------------|------------------|------|
| Complexity     | Handles complex logic | Simple automation | Medium automation |
| Bulk Data      | Best choice     | Limited          | Supported but may hit limits |
| Code Required  | Yes             | No               | Low-code |
| Future Ready   | ✅ | ❌ (Deprecated) | ✅ (Preferred with Apex when needed) |

---

## 🔹 Real-Time Scenario Example
**Requirement:** When an **Opportunity is Closed Won**, auto-create a Contract and notify the Manager.  

```apex
trigger OpportunityTrigger on Opportunity (after update) {
    List<Contract> contracts = new List<Contract>();
    for(Opportunity opp : Trigger.new){
        Opportunity oldOpp = Trigger.oldMap.get(opp.Id);
        if(opp.StageName == 'Closed Won' && oldOpp.StageName != 'Closed Won'){
            contracts.add(new Contract(
                AccountId = opp.AccountId,
                StartDate = Date.today(),
                ContractTerm = 12
            ));
        }
    }
    if(!contracts.isEmpty()){
        insert contracts;
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[]{'manager@company.com'});
        mail.setSubject('New Contract Created');
        mail.setPlainTextBody('A new contract has been created for Opportunity ' + opp.Name);
        Messaging.sendEmail(new Messaging.SingleEmailMessage[]{mail});
    }
}
```

---

✅ This file includes **all topics from Triggers**: basics, types, events, context variables, examples, best practices, helper classes, comparison with Flows, and real-world scenarios.  
