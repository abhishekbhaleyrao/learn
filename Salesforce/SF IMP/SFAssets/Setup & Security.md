# 🛡️ Salesforce User Setup & Security Guide

This document covers **User Setup & Security** in Salesforce with detailed explanations and examples.

---

## 1. User Setup

### Creating a User
- Navigate: **Setup → Users → New User**
- Required fields:
  - First Name, Last Name
  - Alias
  - Email
  - Username (must be in email format, unique across Salesforce orgs)
  - User License (e.g., Salesforce, Platform, Chatter Free)
  - Profile (determines base permissions)

**Example:**  
Create a Sales Rep user:
- Name: John Doe
- Username: john.doe@mycompany.com
- License: Salesforce
- Profile: Standard User
- Role: Sales Rep

---

## 2. Profiles

Profiles define **what users can do** (object permissions, field permissions, tab visibility).

### Key Features:
- Object-level permissions (CRED → Create, Read, Edit, Delete)
- Field-level security
- Login hours & IP restrictions
- Page layout assignments
- Tab settings (Default On/Off, Hidden)

**Example:**  
A **Sales Profile** might have:
- Read/Edit access to Accounts, Contacts, Opportunities
- No access to Service objects (Cases)

---

## 3. Permission Sets

Permission Sets extend access **beyond profiles** without changing the profile.

- Assigned to individual users
- Adds permissions (does not remove)
- Best practice: Keep profiles minimal, extend via Permission Sets

**Example:**  
A user in **Sales Profile** needs **Marketing App access**.  
- Assign “Marketing App Permission Set” instead of cloning/modifying the profile.

---

## 4. Role Hierarchy

Defines **who can see whose records**.

- Higher roles see records owned by lower roles (if sharing allows)
- Does not grant permissions (only record visibility)

**Example Hierarchy:**  
- CEO  
  - VP of Sales  
    - Regional Sales Manager  
      - Sales Rep  

Here, a VP can see all records owned by Sales Reps under their hierarchy.

---

## 5. Organization-Wide Defaults (OWD)

OWD sets the **baseline record access** for all users.

Levels:
- Private → Only record owner can access
- Public Read Only → Everyone can view, only owner can edit
- Public Read/Write → Everyone can view and edit
- Controlled by Parent → Child object inherits access from parent

**Example:**  
Set OWD:
- Account → Private  
- Opportunity → Private  
- Case → Public Read Only  

---

## 6. Sharing Rules

Sharing rules **open up access** to records beyond OWD.

- Based on record ownership (Role, Group, Queue)  
- Based on criteria (field values)  

**Example:**  
OWD for Account is **Private**.  
- Create a rule: Share all Accounts where Industry = “Banking” with **Banking Sales Team** role.

---

## 7. Manual Sharing

- Record owners can **manually share** individual records with other users or groups.
- Available only if OWD is Private or Read-Only.

**Example:**  
Sales Rep shares a key **Account record** with another rep for collaboration.

---

## 8. Public Groups & Queues

### Public Groups
- Collections of users, roles, roles & subordinates
- Used in sharing rules, manual sharing, folder access

**Example:**  
Create a Public Group “APAC Sales Team” and use it in a sharing rule.

### Queues
- Placeholders for records (Leads, Cases, Custom Objects)
- Members can take ownership of queued records

**Example:**  
- Create a Case Queue “High Priority Support”  
- Assign new high-priority cases to the queue  

---

## 9. Login Access Policies

- Define session settings, login hours, and trusted IP ranges

### Login Hours:
- Restrict when users can log in
- Example: Sales Profile allowed only **Mon–Fri, 8 AM–6 PM**

### IP Restrictions:
- Define allowed IP ranges
- Example: Corporate office IP: **192.168.10.1 – 192.168.10.255**

---

## 10. Delegated Administration

- Assign limited admin tasks to non-admin users
- Can manage users in specific roles, reset passwords, assign profiles

**Example:**  
- Delegated Admin group “Support Managers” can manage all users with **Support Profile**.

---

## 11. Monitoring & Auditing

- **Login History** → Check user login attempts, failures
- **Setup Audit Trail** → Track configuration changes
- **Field Audit Trail** (with Shield) → Track field changes beyond standard history

---

# ✅ Best Practices

- Use **least privilege principle** → Profiles minimal, extend via Permission Sets  
- Use **Role Hierarchy** for visibility, not permissions  
- Keep **OWD restrictive**, open access with Sharing Rules  
- Monitor **Login History** regularly  
- Use **Delegated Administration** for distributed management  

---
