
<div id=top-of-page></div>


- [Apex Governor Limits](#apex-governor-limits)
- [Difference between Lookup and Master Detail Relationship](#difference-between-lookup-and-master-detail-relationship)
- [Custom Metadata \& Custom Settings](#custom-metadata--custom-settings)
- [BEST PRACTICES OF APEX CODE](#best-practices-of-apex-code)
- [Decorators available in LWC](#decorators-available-in-lwc)
- [Lifecycle hooks in LWC](#lifecycle-hooks-in-lwc)
- [Order of execution](#order-of-execution)
- [Bulkification](#bulkification)
- [BEST PRACTICES OF Test Classes](#best-practices-of-test-classes)
- [BEST PRACTICES to Write Apex Trigger](#best-practices-to-write-apex-trigger)
- [Trigger Context Variables](#trigger-context-variables)
- [INTERVIEW](#interview)


# Apex Governor Limits

<table>
    <tr>
        <td>Description</td>
        <td>Synchronous Limit</td>
        <td>Asynchronous Limit</td>
    </tr>
    <tr>
        <td>Total number of SOQL queries issued1</td>
        <td>100</td>
        <td>200</td>
    </tr>
    <tr>
        <td>Total number of records retrieved by SOQL queries</td>
        <td>50,000</td>
        <td>50,000</td>
    </tr>
    <tr>
        <td>Total number of records retrieved by Database.getQueryLocator</td>
        <td>10,000</td>
        <td>10,000</td>
    </tr>
    <tr>
        <td>Total number of SOSL queries issued</td>
        <td>20</td>
        <td>20</td>
    </tr>
    <tr>
        <td>Total number of records retrieved by a single SOSL query</td>
        <td>2,000</td>
        <td>2,000</td>
    </tr>
    <tr>
        <td>Total number of DML statements issued2</td>
        <td>150</td>
        <td>150</td>
    </tr>
    <tr>
        <td>Total number of records processed as a result of DML statements, Approval.process, or database.emptyRecycleBin</td>
        <td>10,000</td>
        <td>10,000</td>
    </tr>
    <tr>
        <td>Total stack depth for any Apex invocation that recursively fires triggers due to insert, update, or delete statements3</td>
        <td>16</td>
        <td>16</td>
    </tr>
    <tr>
        <td>Total number of callouts (HTTP requests or web services calls) in a transaction</td>
        <td>100</td>
        <td>100</td>
    </tr>
    <tr>
        <td>Maximum cumulative timeout for all callouts (HTTP requests or Web services calls) in a transaction</td>
        <td>120 seconds</td>
        <td>120 seconds</td>
    </tr>
    <tr>
        <td>Maximum number of methods with the future annotation allowed per Apex invocation</td>
        <td>50</td>
        <td>0 in batch and future contexts; 50 in queueable context</td>
    </tr>
    <tr>
        <td>Maximum number of Apex jobs added to the queue with System.enqueueJob</td>
        <td>50</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Total number of sendEmail methods allowed</td>
        <td>10</td>
        <td>10</td>
    </tr>
    <tr>
        <td>Total heap size4</td>
        <td>6 MB</td>
        <td>12 MB</td>
    </tr>
    <tr>
        <td>Maximum CPU time on the Salesforce servers5</td>
        <td>10,000 milliseconds</td>
        <td>60,000 milliseconds</td>
    </tr>
    <tr>
        <td>Maximum execution time for each Apex transaction</td>
        <td>10 minutes</td>
        <td>10 minutes</td>
    </tr>
    <tr>
        <td>Maximum number of push notification method calls allowed per Apex transaction</td>
        <td>10</td>
        <td>10</td>
    </tr>
    <tr>
        <td>Maximum number of push notifications that can be sent in each push notification method call</td>
        <td>2,000</td>
        <td>2,000</td>
    </tr>
    <tr>
        <td>Maximum number of EventBus.publish calls for platform events configured to publish immediately</td>
        <td>150</td>
        <td>150</td>
    </tr>
</table>

<div align="right"><a href="#top-of-page">(^)</a></div>

# Difference between Lookup and Master Detail Relationship

<table>
    <tr>
        <td>Lookup Relationships</td>
        <td>Master-Detail Relationship</td>
    </tr>
    <tr>
        <td>Loosely coupled.</td>
        <td>Strongly coupled.</td>
    </tr>
    <tr>
        <td>Roll-up summary field not available.</td>
        <td>Roll-up summary field is available.</td>
    </tr>
    <tr>
        <td>Parent record is not required when creating a child record.</td>
        <td>Parent record is required in order to save a child record.</td>
    </tr>
    <tr>
        <td>Lookup fields are not required on the page layout of the detail record but if you make them a required field, it is advised!</td>
        <td>Master-detail field is always required on the page layout of the detail record (because of the point above).</td>
    </tr>
    <tr>
        <td>Standard object record can be on the detail side of a custom object in a lookup relationship.</td>
        <td>Standard object record cannot be a child.</td>
    </tr>
    <tr>
        <td>By default record ownership of child records is not controlled by the parent.</td>
        <td>The parent controls the record ownership of child records. The owner field is not available on the detail record in master-detail relationship queues, sharing rules and manual sharing is not possible for detail records as it requires the owner field.</td>
    </tr>
    <tr>
        <td>You can have a child record without a parent.</td>
        <td>You cannot have a child record without a parent.</td>
    </tr>
    <tr>
        <td>You can have a maximum of 40 lookups on an object.</td>
        <td>You can have a maximum of two master details on an object.</td>
    </tr>
    <tr>
        <td>No cascade delete.</td>
        <td>Cascade delete.</td>
    </tr>
</table>

<div align="right"><a href="#top-of-page">(^)</a></div>

# Custom Metadata & Custom Settings

<table>
    <tr>
        <td>Custom Settings</td>
        <td>Custom Metadata Types</td>
    </tr>
    <tr>
        <td>Type</td>
        <td>Custom Settings are also similar to custom objects. You can either create a List based or hierarchy based custom setting.</td>
        <td>Custom metadata does not support Hierarchy type of data based on user profile or a specific user.</td>
    </tr>
    <tr>
        <td>Deployment</td>
        <td>Custom settings data cannot be deployed using packages or Metadata API/Change Sets.</td>
        <td>Custom metadata types data can be easily packaged and deployed. Metadata types can also be deployed via Change Sets/Metadata API.</td>
    </tr>
    <tr>
        <td>Relationship Field</td>
        <td>Custom settings do not support relationship fields.</td>
        <td>You can create lookups between Custom Metadata objects.</td>
    </tr>
    <tr>
        <td>Suffix</td>
        <td>It has a suffix of “__C” like custom object</td>
        <td>It has a suffix of “__mdt”</td>
    </tr>
    <tr>
        <td>Test Class</td>
        <td>Custom setting data is not visible in test classes.</td>
        <td>Custom metadata types are visible in test class without the “SeeAllData” annotation.</td>
    </tr>
    <tr>
        <td>DML in Apex</td>
        <td>You can perform CUD (Create, Update, Delete) operation on custom setting in apex.</td>
        <td>You cannot perform CUD (Create, Update, Delete) operation on custom metadata type in apex.</td>
    </tr>
    <tr>
        <td>SOQL</td>
        <td>You can access custom setting data using instance methods and can avoid SOQL queries to database</td>
        <td>With custom metadata types, you can issue unlimited (SOQL) queries for each Apex transaction. But method is also available.</td>
    </tr>
</table>

<div align="right"><a href="#top-of-page">(^)</a></div>

# BEST PRACTICES OF APEX CODE
- Bulkify Apex Code
- Avoid SOQL & DML Inside For Loop 
- Optimize SOQL Queries to avoid Timeout Issues
- Use Of Map Of SObject
- Use Of The Limits Apex Methods 
- Avoid Hardcoding IDs
- Use Database Methods While Doing DML Operation
- Exception Handling In Apitx Code 
- Use transactional finalizers
- Write One Trigger Per Object Per Event 
- Use Asynchronous Apex
- Security And Sharing In Apex Code
- Make Reusability Of Apex Code
- Code Coverage 
- Return Early Pattern
- Avoid Nesting Loops Within Loops 
- Don't Mix Apex, Process Builders, Workflow Rules, And Record-Triggered Flows.
- Apex Naming Conventions-https://quip.com/MW5cAPVwat8k#JCIACABQ963
- Setup Code Review Checklist And Code Review Process 


<div align="right"><a href="#top-of-page">(^)</a></div>

# Decorators available in LWC		

- There are three different decorators available in lightning web component

  1. @api

  2. @track

  3. @wire

- **@api** is used to make any JavaScript class variable to public and can be accessed outside of the Lightning web component. For Example:- Child to parent, parent to child

- **@wire** is used to call the Apex Class methods from Lightning web component or calling the Salesforce standard methods/api from the Lightning web component.

- **@track** is used to make the variable reactive. (it's not needed from the premitive variables) but is useful when the variable store the objects of obiects { "child": { "grandChild" : { } } }) or array of objects. ([, ])

<div align="right"><a href="#top-of-page">(^)</a></div>

# Lifecycle hooks in LWC

- Lifecycle hooks in Lightning Web Components (LWC) are special methods or functions that are automatically called at specific stages of a component's lifecycle. They allow developers to intervene and execute code at critical moments during a component's life, such as when it's created, rendered, updated, or destroyed. Some of the key lifecycle hooks in LWC include:

    **constructor()**: Called when a component instance is created.

    **connectedCallback()**: Invoked when a component is inserted into the DOM.

    **renderedCallback()**: Fired when a component is completely rendered on the DOM.

    **disconnectedCallback()**: Called when the element is removed from the document.

    **errorCallback()**: Invoked when there is an error during rendering.

- These hooks provide a comprehensive way to control and intervene in various phases of a component's lifecycle, and are crucial for creating responsive and robust web applications. Understanding and effectively using these hooks is pivotal for successful development in Salesforce's Lightning Web Components
<div align="right"><a href="#top-of-page">(^)</a></div>

# Order of execution 


- In Salesforce, the order of execution for triggers when saving a record with an insert, update, or upsert statement is as follows:
1. Load the original record or initialize on insert.
2. Override the old record values with the new values.
3. Execute all before triggers.
4. Run the system & user-defined validation rules.
5. Save the record but do not commit the record to the database.
6. Execute all after triggers.
7. Execute the assignment rules.
8. Execute the auto-response rules.
9. Execute the workflow rules.
10. If there are workflow field updates, then execute before and after triggers.
11. Execute the processes and flows on that record.
12. Execute the escalation rules.
13. Update the roll-up summary fields & cross-object formula fields.
14. Repeat the same process with the affected parent or grand-parent records.
15. Evaluate criteria-based sharing rules.
16. Commit all DML operations to the database.
17. Execute post-commit logic such as sending emails
18. Understanding the order of execution is crucial for developers and administrators to design efficient and reliable triggers in Salesforce
- For a more detailed understanding, you can refer to the Salesforce Developer Guide"                          
              
<div align="right"><a href="#top-of-page">(^)</a></div>

# Bulkification

- Bulkification is either the process of combining repetitive tasks in Apex. — or — Bulkification is the process of ensuring the Apex code properly handles more than one record at a time.

- In Salesforce, Trigger.new will batch up mass updates, including up to 200 records at once (as commonly happens when using tools like Data Loader). So, for example, if you do one SOQL query per record, you’ll exceed the 100 SOQL query limit.

- Bulkification in Salesforce is the practice of writing code that can efficiently handle large volumes of data. It involves combining tasks in Apex to process records in bulk, thus avoiding hitting Governor Limits. An example of bulkified code is a trigger that can update multiple records at once, instead of processing one record at a time. This approach optimizes performance and ensures that the code runs within the platform's limits. For instance, a bulkified trigger on the Account object would use a for loop to handle updates on multiple records, rather than processing them individually. This is essential for maintaining the performance and scalability of Salesforce applications.


<div align="right"><a href="#top-of-page">(^)</a></div>

# BEST PRACTICES OF Test Classes

- Unit tests must cover at least 75% of your Apex code, and all of those tests must complete successfully.
- Every trigger must have some test coverage.
- All classes and triggers must compile successfully.
- Note the following.
- When deploying Apex to a production organization, each unit test in your organization namespace is executed by default.
- Calls to System.debug aren’t counted as part of Apex code coverage.
- Test methods and test classes aren’t counted as part of Apex code coverage.
- While only 75% of your Apex code must be covered by tests, don’t focus on the percentage of code that is covered. Instead, make sure that every use case of your application is covered, including positive and negative cases, as well as bulk and single records. This approach ensures that 75% or more of your code is covered by unit tests.
- Tests don’t run in parallel in metadata deployments, package installations, or change set deployments.

<div align="right"><a href="#top-of-page">(^)</a></div>

-To write an effective test cases, a developer needs to ensure to include the below points into the test class

 • Test class must start with @isTest annotation.
 • Focus 90+ : To deploy to production at least 75% code coverage is required. But always try to focus on 90%+. We should not focus on the percentage of code coverage, We should make sure that every use case should covered including positive, negative,bulk and single record.
 • One Assert Statement per method : Always put assert statements for negative and positive tests.
     System.assert(condition, msg)
     System.assertEquals(expected, actual, msg)
     System.assertNotEquals(expected, actual, msg)
 • @testSetup to create test records once in a method and use in every test method in the test class.
 • Create TestFactory class with @isTest annotation to exclude from organization code size limit.
 • No SeeAllData=true : Always use ( seeAllData = false ) at class or method level. User, profile, organization, AsyncApexjob, Corntrigger, RecordType, ApexClass, ApexComponent, ApexPage we can access without (seeAllData=true) .
 • As apex runs in system mode so the permission and record sharing are not taken into account . So we need to use System.runAs to enforce record sharing.
 • Avoid Using Hard Coding Ids anywhere in test Class or any apex class
 • Governor limits : Using Test.startTest() gives developers a new set of governor limits for the act stage of their test. Test.stopTest() then allows them to return to their previous governor limits. Test classes must test for Governor Limits using Limits Class
 • Testing Exception : Any exceptions that are caught in the production methods should be tested by feeding the test data that throws exception. Exception Type and error message should be asserted
 • Exercise bulk trigger functionality – use at least 200 records in your tests

<div align="right"><a href="#top-of-page">(^)</a></div>

# BEST PRACTICES to Write Apex Trigger

- Here are some best practices for working With Apex triggers:

- Avoid using triggers to perform complex business logic. Triggers are intended to perform simple,
efficient actions in response to events, rather than implementing complex business logic.
Instead, you should use Apex classes and methods to encapsulate this logic and call them from
your triggers.

- Use triggers to enforce data integrity and consistency. Triggers can be used to enforce data
validation rules and ensure that data is consistent across objects. For example, you could use a
trigger to prevent the deletion of a record if it is referenced by other records.

- Use Apex Governor Limits to prevent triggers from consuming too many resources. Apex
Governor Limits are limits on the amount of resources (e.g. database queries, heap size) that
can be consumed by Apex code. You should design your triggers to be efficient and avoid
exceeding theke limits.

- Test your triggers thoroughly. It'S important to test your triggers thoroughly to ensure that they
are working as expected and not causing any unintended side effects. You should test your
triggers using both positive and negative test cases to ensure that they are robust and reliable.

- Use the @isTest annotation to specify that a class or method is a test class or method. The
@isTest annotation is used to specify that a class or method is a test class or method, which
allows Salesforce to identify it as a test and exclude it from code coverage requirements.

<div align="right"><a href="#top-of-page">(^)</a></div>

# Trigger Context Variables 
- All triggers define implicit variables that allow developers to access run-time context. These variables are contained in the System.Trigger class.

<table>
    <tr>
        <td>Variable</td>
        <td>Usage</td>
    </tr>
    <tr>
        <td>isExecuting</td>
        <td>Returns true if the current context for the Apex code is a trigger, not a Visualforce page, a Web service, or an executeanonymous() API call.</td>
    </tr>
    <tr>
        <td>isInsert</td>
        <td>Returns true if this trigger was fired due to an insert operation, from the Salesforce user interface, Apex, or the API.</td>
    </tr>
    <tr>
        <td>isUpdate</td>
        <td>Returns true if this trigger was fired due to an update operation, from the Salesforce user interface, Apex, or the API.</td>
    </tr>
    <tr>
        <td>isDelete</td>
        <td>Returns true if this trigger was fired due to a delete operation, from the Salesforce user interface, Apex, or the API.</td>
    </tr>
    <tr>
        <td>isBefore</td>
        <td>Returns true if this trigger was fired before any record was saved.</td>
    </tr>
    <tr>
        <td>isAfter</td>
        <td>Returns true if this trigger was fired after all records were saved.</td>
    </tr>
    <tr>
        <td>isUndelete</td>
        <td>Returns true if this trigger was fired after a record is recovered from the Recycle Bin. This recovery can occur after an undelete operation from the Salesforce user interface, Apex, or the API.</td>
    </tr>
    <tr>
        <td>new</td>
        <td>Returns a list of the new versions of the sObject records.This sObject list is only available in insert, update, and undelete triggers, and the records can only be modified in before triggers.</td>
    </tr>
    <tr>
        <td>newMap</td>
        <td>A map of IDs to the new versions of the sObject records.This map is only available in before update, after insert, after update, and after undelete triggers.</td>
    </tr>
    <tr>
        <td>old</td>
        <td>Returns a list of the old versions of the sObject records.This sObject list is only available in update and delete triggers.</td>
    </tr>
    <tr>
        <td>oldMap</td>
        <td>A map of IDs to the old versions of the sObject records.This map is only available in update and delete triggers.</td>
    </tr>
    <tr>
        <td>operationType</td>
        <td>Returns an enum of type System.TriggerOperation corresponding to the current operation.Possible values of the System.TriggerOperation enum are: BEFORE_INSERT, BEFORE_UPDATE, BEFORE_DELETE,AFTER_INSERT, AFTER_UPDATE, AFTER_DELETE, and AFTER_UNDELETE. If you vary your programming logic based on different trigger types, consider using the switch statement with different permutations of unique trigger execution enum states.</td>
    </tr>
    <tr>
        <td>size</td>
        <td>The total number of records in a trigger invocation, both old and new.</td>
    </tr>
</table>

<div align="right"><a href="#top-of-page">(^)</a></div>

# INTERVIEW

https://www.interviewbit.com/lwc-interview-questions/

Interview Topics
ADMIN
Sharing & Security - Object Level Security
Record Level Security
Permission Set
Profile
Role Hierarchy
Manual Sharing & Criteria based Sharing

Custom Metadata & Custom Settings
Why We use them
What are different ways to use them
Difference between them


Object & Relationships
Different Type of objects
Why we use them
What is lookup Master Detail Self Relationship

Validation Rule & Formula Field

Process Automation
Workflow Rule Process Builder
Lightning Flows
When to use them


1. Tell me about yourself
2. How to configure Object level security?
   Create, Read, Delete
3. How many Relationships in Salesforce?
4. What is Static & Dynamic Dashboard?
5. How do you access Historical data report?
6. What is OWD?
7. What is Triggers?
8. Best Practices of Triggers?
9. What are the limit for SOQL and SOSL? Async and Sync
10. What is deployment? Workbench changeset?
11. What is Custom Page Layout and Lightning Page Layout?
12. What are different types of Dashboard Components?
13. Waht is Async and Sync Apex?
<div align="right"><a href="#top-of-page">(^)</a></div>

<div align="right"><a href="#top-of-page">(^)</a></div>
<div align="right"><a href="#top-of-page">(^)</a></div>
<div align="right"><a href="#top-of-page">(^)</a></div>
<div align="right"><a href="#top-of-page">(^)</a></div>
<div align="right"><a href="#top-of-page">(^)</a></div>