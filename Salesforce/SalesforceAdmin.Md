<div id=top-of-page></div>

- [RELATIONSHIPS](#relationships)
  - [1.Lookup Field / Lookup Relationship](#1lookup-field--lookup-relationship)
  - [2.Master Detail Relationship](#2master-detail-relationship)
    - [Rollup Summary Field](#rollup-summary-field)
    - [How to convert Lookup to Master-Detail Relationship](#how-to-convert-lookup-to-master-detail-relationship)
    - [How to convert Master-Detail relationship into Lookup.](#how-to-convert-master-detail-relationship-into-lookup)
  - [3.Junction Object (Many To Many) Relationship](#3junction-object-many-to-many-relationship)
- [List View](#list-view)
- [Lightning Pages - Home Page, Record Page, App Page](#lightning-pages---home-page-record-page-app-page)
- [Duplicate and Matching Rule](#duplicate-and-matching-rule)
  - [DUPLICATE RULE](#duplicate-rule)
  - [MATCHING RULE](#matching-rule)
- [Activities : Task, Events, Call, Email](#activities--task-events-call-email)
- [Feed Tracking](#feed-tracking)
- [Field History Tracking](#field-history-tracking)
- [Global Actions](#global-actions)
- [View setup audit trails](#view-setup-audit-trails)
- [DATA SECURITY](#data-security)
  - [Level of Data Access](#level-of-data-access)
    - [1. Organization Level Security](#1-organization-level-security)
    - [2. Object Level Security](#2-object-level-security)
    - [3. Field Level Security](#3-field-level-security)
      - [PROFILES](#profiles)
      - [What Can be controlled through Profile?](#what-can-be-controlled-through-profile)
      - [Enhanced User Profile](#enhanced-user-profile)
      - [PERMISSION SETS](#permission-sets)
      - [PERMISSION SET GROUPS](#permission-set-groups)
      - [MUTE in Permission Set Group](#mute-in-permission-set-group)
    - [4. Record Level Security](#4-record-level-security)
- [APPROVAL PROCESS](#approval-process)
- [Dynamic Forms](#dynamic-forms)
- [Object Specific Actions/ Quick Actions](#object-specific-actions-quick-actions)
- [FLOWS](#flows)
  - [When to Use?](#when-to-use)
  - [Flow Elements](#flow-elements)
  - [Types of Flows](#types-of-flows)
    - [1. Screen Flow](#1-screen-flow)
    - [2. Record Triggered Flow](#2-record-triggered-flow)
    - [3. Schedule Triggered Flow](#3-schedule-triggered-flow)
    - [4. Platform Event Triggered Flow](#4-platform-event-triggered-flow)
    - [5. Autolaunched Flow](#5-autolaunched-flow)
- [WebToLead](#webtolead)
- [WebToCase](#webtocase)
- [EmailToCase](#emailtocase)
- [INTERVIEW](#interview)


# RELATIONSHIPS

## 1.Lookup Field / Lookup Relationship

- One to Many relationship between the two object(Parent - Chiild)

  - Eg. Account (Parent) to Contacts, Opportunity, Cases (Child)

- LookupFilelds are created to the child not on Parent.

  - Eg. Class -Parent (Related List)

- Student- Child (Lookup Field)
- It is **Loosely coupled**.

<div align="right"><a href="#top-of-page">(^)</a></div>

## 2.Master Detail Relationship

- One to Many Relationship between two Objects (Parent - Child)
- If Master records are deleted then all related records will be deleted.
- **Tightly Coupled**.
- Relationship field will be created on Detail side or Child side.
- We cannot create Master-Detail on **Standard Object**.

<div align="right"><a href="#top-of-page">(^)</a></div>

### Rollup Summary Field

- Rollup Summary Fileds are always created on Master Side.
- **COUNT, SUM, MIN, MAX** aggregate fuctions.
- Rollup Summary Field are Read Only fields.
- 40 Rollup Summary we can create per Object. But It's not recommended to go beyond 25.

<div align="right"><a href="#top-of-page">(^)</a></div>

### How to convert Lookup to Master-Detail Relationship

- If the Records are present on object we will not be able to create relationship among the object.
- First we have to select Parent Object for every record , then we can able to convert it to Master-Detail.
- We can't able to change Filter Logic from AND to OR.

<div align="right"><a href="#top-of-page">(^)</a></div>

### How to convert Master-Detail relationship into Lookup.

- If Rollup Summaries are present on the Master then we have to delete it first from Parent Object & Recycle bin to convert Master-Detail to Lookup.
- IF we want to delete Rollup Summary field after deletion, Go to deleted field on the same object and Erase the Field then only we can convert Master-Detail to Lookup.

<div align="right"><a href="#top-of-page">(^)</a></div>

## 3.Junction Object (Many To Many) Relationship

- We have to create one Object (Third Table) in which two Master-Detail Object Fields we have to save.
- As Salesforce Limitation, One Object we can have only Two Master-Detail Relationship, So we can not able to Create Third MAster-Detail relationship in the same Junction Object.

<div align="right"><a href="#top-of-page">(^)</a></div>

# List View

- All record and Recently Viewed.
- Shows list of records available under object.
- We can choose which fields to display in List View.
- Also We can apply Sharing & Filters on the List View.

<div align="right"><a href="#top-of-page">(^)</a></div>

# Lightning Pages - Home Page, Record Page, App Page

- Home Page, Record Page, App Page
  - Steps: Setup-> Home-> Search Lightning App Builder-> New
- We can add component to page.
- We can add, edit the homepage through gear icon> Edit Page or Lightning app builder.
- We can set component visibility by filter.
- Pages are shared with Profile and App.
- We can have different Pages for Different Profiles and Apps."

<div align="right"><a href="#top-of-page">(^)</a></div>

# Duplicate and Matching Rule

## DUPLICATE RULE

- Prevent creation of Duplicate Records.
- It shows either Warning or block record creation and updation in case of duplicates.
- We can create reports on Duplicate Records as well.

## MATCHING RULE

- Here we need to set Criteria for Duplicate Check.
- If we want to create Duplicate Rule, then we must have to create matching rule.
- Enforce record sharing rule means the duplicate records check which user can have access to.
- Bypass record sharing rule means duplicate record check in all records the user have access to.
- We can create Duplicate check through Flow and Trigger.
  - Upto 5 active matching rule are allowed per Object.
  - Upto 25 total matching rule are allowed.
  - Upto 100 Total matching rule are allowed(both active & Inactive).
  - Only one lookup Field is allowed per matching Rule.

<div align="right"><a href="#top-of-page">(^)</a></div>

# Activities : Task, Events, Call, Email

- Bydefault these activities are ON for standard Objects.
- For Custom Objects, We need to check the option **"Allow Activities"** while creation of Object.
- <div align="right"><a href="#top-of-page">(^)</a></div>

# Feed Tracking

- Feed tracking enables to **track changes** of **Selected Field and Related Record Field**
- Changes are shown in Chatter Component.
- It shows Old Value, New Value and who has change the Value. - You can select upto 20 Field for Feed Tracking for one Object. -
<div align="right"><a href="#top-of-page">(^)</a></div>

# Field History Tracking

- Field History Tracking enables to **track changes of Selected Fields**
- Changes are shown in History Related List.
- It shows Old Value, New Value and who has change the Value.
- We have to Set History Tracking on the Object.
- We have to check the option **"Track Field History"** while creating the Object or Edit and check the same option.
- We have to add Related Field History to the Page Layout, So that we can able to see the Field History Tracking.
- <div align="right"><a href="#top-of-page">(^)</a></div>

# Global Actions

- Top Right + Sign (New Event, New Task, New Contact, Log a Call, New Opportunity, New Case, New Lead, Email)

<div align="right"><a href="#top-of-page">(^)</a></div>

# View setup audit trails

- It shows list of changes done by user in differet components.
- We can download past 6 month changes.

<div align="right"><a href="#top-of-page">(^)</a></div>

# DATA SECURITY

- Data Security is important because you need to control what a user or group of user can see in the org or app.
- Salesforce Provides Layered Sharing Model.
- You can easily assign different data sets to different group of users.
- You can control access to your whole org, any specific object, field and records.

<div align="right"><a href="#top-of-page">(^)</a></div>

## Level of Data Access

1. Organization
2. Objects
3. Fields
4. Records

<div align="right"><a href="#top-of-page">(^)</a></div>

### 1. Organization Level Security

- Maintain a list of authorized users.
- Set password policies.
- Limit Login to certain hours & locations.
- Limit IP addresses from which users can login.
- Limit the times at which users can login.

<div align="right"><a href="#top-of-page">(^)</a></div>

### 2. Object Level Security

- You can Control Object Level Permissions for Standard and Custom Objects.
- You can Set Permissions for a particular Object.
- You can give permissions to View, Create, Edit and Delete any records of that object.
- You can control Object Permissions using Profiles and Permission Sets.
  - For Object we have 4 permission View, Create, Edit & Delete.
  - 1 Security 2 Sharing

<div align="right"><a href="#top-of-page">(^)</a></div>

### 3. Field Level Security

- You can Restrict access to certain fields in Salesforce, even if user has Object Level Access.
- You can make a field Visible to a particular user and can Hide that from another user.
- You can give READ or EDIT permisiion to a field, if you don't give both then tat field will not be Visible.
- Field Level Security can be controlled using Profiles and Permission Sets.
- For Field we have only 2 permission **READ & EDIT**.

<div align="right"><a href="#top-of-page">(^)</a></div>

#### PROFILES

- Profile is collection of Settings & Permissions.
- Profile settings determine which data that user can see and Permissions determine what user can do with that data.
- Profile can be assigned to many users, but a user can only have one profile at a time.
- We need to clone existing profile.
- **Profile** is used to **Restrict Object and fields.**

<div align="right"><a href="#top-of-page">(^)</a></div>

#### What Can be controlled through Profile?
- Assigned App & Assigned Connected Apps.
- Object Settings
- App Permissions
- Apex Class & VF Page Access
- External Data Source Access
- Named Credential Access
- Flow Access
- Custom Permissions & Custom Metadata Type
- Custom Setting Definitions
- System Permissions

#### Enhanced User Profile

Go to User Management Settings & activate Enhanced Profile User Interface
<div align="right"><a href="#top-of-page">(^)</a></div>

#### PERMISSION SETS

- A Permission Set is a collection of Settings and permissions that give user access to various tools and functions.
- Permission Sets extend users functional access without changing their Profile.
- Through Permission Sets Permission can be granted and any time it can be revoke as well.
- Users can have only one Profile, but they can have multiple Permission Sets assigned.
- **Permission Sets** Used to **Open-up Object and fields**.

<div align="right"><a href="#top-of-page">(^)</a></div> 

#### PERMISSION SET GROUPS
- Permission Set group bundles different permission sets together based on a persona.
- Permission set group includes all the permissions available in the permission sets.
- One permission set can be included in more than one permission set groups.
- A user can be assigned one or more Permission Set Groups.
- Also we can assign Permission Set and Permission Set Groups together to users.
- **Permission Sets Group** Used to **Open-up Object and fields**

<div align="right"><a href="#top-of-page">(^)</a></div> 

#### MUTE in Permission Set Group
What is MUTE in Permission Set Group?

- One can mute some permissions in Permission Set Groups so that they won't be given to the user.
- If you mute particular permission in Permission Set Group then it won't impact individual Permission Set, they remain intact.
- You can anytime unmute the permissions in permission set group.

<div align="right"><a href="#top-of-page">(^)</a></div>

### 4. Record Level Security

- You can restrict access to records for users, even if user has object level permissions.
  - For example, a user can view his own records but not others.
- You can manage Record Level Access in following ways:  
    1. Oganization-wide defaults  
    2. Role hierarchies   
    3. Sharing rules 
    4. Manual sharing


    #### 1. Oganization-wide defaults 
    
    - It specified the default level of access of records.
    - Org-wide sharing setting lock down the data to the most restrictive level.
    - Here you have three access level:
       - Private
       - Public Read-Only
       - Public Read/Write
    - You can use other Record Level security and sharing tools to open up the sharing of records.
    - **OWD used to Restrict Record**
  
    #### 2. Role hierarchies

    - It gives access for higher in the hierarchy.
    - That user can access all records owned by the users below them in the hierarchy.
    - Each role in the hierarchy should represent a level of Data access that a user or group of user needs.
    - **Role Hierarchy used to Openup records** 
    - Automatically assigns
  
    #### 3. Sharing Rules

    - These are exceptions to Org-Wide defaults.
    - Through sharing rules you can share records to a group of users.
      So that, they can get access to the records they don't own or can't manually see.
    - **Sharing Rules used to Openup Records**
    - Owner based(public group we have to create) and criteria based
    - Record access Cant be share through Profile n permission sets. 

    #### 4. Manual Sharing

    - It allows owners of particular records to share them with another users.
    - Manual sharing is not automated like Org-wide defaults, Role hierarchy or sharing rules.
    - It can be useful in some situation where you manually want to share a record with another user.
    - **Manual Sharing Rules used to Openup records**
    - Used to share specific record to the group of users or particular user
    - We can bypass record level security through Profile and permissions sets using viewall n modifyall 
  
<div align="right"><a href="#top-of-page">(^)</a></div> 

# APPROVAL PROCESS

- An approval process is an automated process.
- It is implemented to approve records.
- We can specifies the steps those are necessary for approval.
- It allows a step to apply to all records or just records that have certain attributes.
- In approval process we can also define who will be approving at each step.
- Approver can take steps that when a record is approved, reiected or recalled.
- We have to create email template for approve n reject. Also we have assign role to the user if not assigned. Manager or any person. It depends on criteria weather we have to approve or reject the record creation. 

<div align="right"><a href="#top-of-page">(^)</a></div> 

# Dynamic Forms
Page Setup
<div align="right"><a href="#top-of-page">(^)</a></div>

# Object Specific Actions/ Quick Actions
- Object related actions on the top right corner.
  - Object Manager-> Select Object ->Buttons, Links and Actions -> New Actions
<div align="right"><a href="#top-of-page">(^)</a></div>

# FLOWS
- Provides declarative process automation.
  - Lightning flow provides this point and click automation tool i.e. Taw Butter.
  - Lightning Flow is the name of product.
- Process Builder and Flow Builder are name of the tools.
- Use Process Builder to create Processes.
- Use Flow Builder to create Flows.

## When to Use?
- Automate a guided visual experience.
  - Screen Flow
- To build complex functionality which can run automatically in the background.
  - Record Triggered Flow
  - Scheduled Triggered Flow
- Need to call flows from apex or lightning com
  - Auto launched Flow

## Flow Elements
**Interaction**
- Screen
- Action
- Subflow

**Logic**
- Assignment
- Decision
- Loop
- Collection Sort
- Collection Filter

**Data** 
- Create Records
- Update Records
- Get Records
- Delete Records

**Resources That can be created:**
- Variable
- Constant
- Formula
- Text Template
- Choice
- Record Choice Set
- Picklist Choice Set
- Stage

## Types of Flows
1. Screen Flow
2. Record Triggered Flow
3. Schedule Triggered Flow
4. Platform Event Triggered Flow
5. Autolaunched Flow
6. Record Triggered Orchestration 
   - Record Triggered Orchestration - runs whenever a specified type of record is created or updated

### 1. Screen Flow
- It guides user through a business process
- It can be launched through
  - Lightning Page,
  - Experience Cloud Sites,
  - Quick Actions and more.
 
### 2. Record Triggered Flow
- Record - Triggered Flow
- Launches when a Record is
  - Created
  - Updated or
  - Deleted
- This autolaunched flow runs in the background.

- It actually replaces WORKFLOW and PROCESS BUILDER functionality. Because WORKFLOW and PROCESS BUILDER are used to create and update records only. But the RECORD TRIGGERED FLOW is launch when record ths Created updated and deleted.

 
### 3. Schedule Triggered Flow

- Launches at a specified time and frequency for each record in a batch.
  - This autolaunched flow also runs in the background.

### 4. Platform Event Triggered Flow

### 5. Autolaunched Flow

- It is invoked by
  - Apex
  - Processes means Process Builders
  - REST API
  - and more...
- This autolaunched flow also runs in the background.

**Migrate to Flows**
- All the process automations which are in workflow rules and process builders we can migrate to flow using this functionality. because Process builder and workflow rules are depricated.


<div align="right"><a href="#top-of-page">(^)</a></div>

**How to Add Screen Flow to Quick action and page Layout**
- Object Manager-> Select Object ->Buttons, Links and Actions -> New Actions
Then goto Specific Object PageLayout > Add >Save
- Using Section we can split the object element in screen flow

**How to Add Screen Flow to record page Layout**
- Setting Gear icon > Edit Page> Right side serch for flow> Drag Flow to Activity and chatter
  
# WebToLead
- Generate Web-To Lead form (map with standard field/custom field/record type)
- Generate Web—To Lead form (map With Campaign)
- Default Lead Creator
- Default Lead Response Template
- Default Lead Owner (User/Queue)
- Notify Default Lead Owner (User/Queue)
- Generate Web-To Lead with re-CAPTCHA  API (to avoid Spam Records)
      
- Debug your web-to lead form
- Lead Assignment Rules
- Lead Auto-Response Rules
- Place Web-To Lead form into Public Website
- Lead Convert (Account, Contact, Opportunity)
- Generate Reports
- Web-To Lead Limitations

<div align="right"><a href="#top-of-page">(^)</a></div> 

# WebToCase

<div align="right"><a href="#top-of-page">(^)</a></div> 

# EmailToCase

<div align="right"><a href="#top-of-page">(^)</a></div> 

<div align="right"><a href="#top-of-page">(^)</a></div> 
<div align="right"><a href="#top-of-page">(^)</a></div>
<div align="right"><a href="#top-of-page">(^)</a></div>

# INTERVIEW

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
14.
