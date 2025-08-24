# 🌀 Salesforce Flows – Interview Q&A (25 Questions)

---

## **1. What are the different types of Flows in Salesforce?**
- Screen Flow  
- Record-Triggered Flow  
- Scheduled-Triggered Flow  
- Platform Event-Triggered Flow  
- Autolaunched Flow  

---

## **2. What is a Screen Flow?**
- Flow with **user interaction** (displays screens, collects input).  
- Example: Guided wizard for Lead Qualification.  

---

## **3. What is a Record-Triggered Flow?**
- Runs **automatically** when a record is created, updated, or deleted.  
- Example: When an Opportunity is Won → create a Contract.  

---

## **4. Difference between Before-Save and After-Save Record-Triggered Flows?**
- **Before-Save Flow** → Runs before DML commit, faster, can update fields on the same record.  
- **After-Save Flow** → Runs after record is saved, used for creating related records or calling subflows.  

---

## **5. What is a Scheduled-Triggered Flow?**
- Runs at a **scheduled time** (like a batch job).  
- Example: Weekly reminder emails for open cases.  

---

## **6. What is a Platform Event-Triggered Flow?**
- Triggered by **Platform Events** (real-time integration messages).  
- Example: Flow triggers when an external ERP publishes an Order event.  

---

## **7. What is an Autolaunched Flow?**
- Runs **without user interaction**.  
- Can be called from Apex, another Flow, or API.  
- Example: Discount calculation Flow.  

---

## **8. When would you use Flow vs Apex?**
- Use **Flow**: For simple to medium business automation, admin-friendly, low-code.  
- Use **Apex**: For complex logic, handling huge data volumes, or integrations.  

---

## **9. Can Flows replace Workflow Rules and Process Builder?**
- Yes ✅ Salesforce has announced deprecation of Workflow Rules & Process Builder.  
- Flows are the **future of automation**.  

---

## **10. What are Flow Limits (Governor-like)?**
- **Elements at runtime**: 2000  
- **DML Statements**: 150  
- **SOQL Queries**: 100  
- **CPU time**: 10,000 ms  
- Same as Apex limits.  

---

## **11. What is Subflow in Salesforce?**
- A Flow that is **invoked inside another Flow**.  
- Useful for reusability (like modular functions).  

---

## **12. How do you debug Flows?**
- Use **Flow Debug Tool** in Setup.  
- Use **Fault connectors** to capture errors.  
- Use **Debug Logs** in Setup → Debug Logs.  

---

## **13. What are Fault Paths in Flow?**
- Error-handling paths when a Flow element fails.  
- Example: If a DML fails, send error email to admin.  

---

## **14. How do you deploy Flows to Production?**
- **Change Sets**  
- **SFDX / Metadata API**  
- **Third-party tools** (Copado, Gearset)  

---

## **15. Can Flows be versioned?**
- Yes ✅ Each saved Flow has a **Version**.  
- Only **1 version can be Active** at a time.  

---

## **16. What is the difference between Fast Field Update and Actions/Related Records in Record-Triggered Flow?**
- **Fast Field Update** → Updates record before save (very fast).  
- **Actions/Related Records** → After save actions like creating related records or sending emails.  

---

## **17. How do you call Apex from Flow?**
- Use **Apex-Defined Actions**.  
- Create Apex class with `@InvocableMethod`.  

```apex
public class DiscountCalculator {
   @InvocableMethod
   public static List<Decimal> calculate(List<Decimal> amounts){
       List<Decimal> result = new List<Decimal>();
       for(Decimal a : amounts){
           result.add(a * 0.9);
       }
       return result;
   }
}
```

---

## **18. Can you call a Flow from LWC or Aura?**
- Yes ✅ via **Flow component** (`lightning-flow`) or **Flow APIs**.  

---

## **19. What are Flow Best Practices?**
- Bulkify Flows (use **Get Records** wisely).  
- Avoid hard-coded IDs.  
- Use Subflows for reusability.  
- Add Fault paths for error handling.  
- Document business logic inside Flow description.  

---

## **20. Give a real-time example of Flow you built.**
**Answer:**  
“I built a Record-Triggered Flow on Opportunity. When stage = Closed Won, it auto-creates a Contract, sends an email to Sales Manager, and updates renewal reminder tasks.”  

---

## **21. Difference between Flow and Process Builder?**
- **Process Builder** is older, being retired.  
- **Flows** are faster, more scalable, handle before-save & after-save logic, and replace both Workflow & PB.  

---

## **22. What is a Rollback in Flow?**
- Flows do not directly support rollback, but errors can stop execution.  
- For rollback logic → Apex or Platform Events may be needed.  

---

## **23. Can Flows handle bulk data (like Data Loader operations)?**
- Yes, but must be **bulkified**.  
- Avoid unnecessary queries/updates.  
- Prefer **Apex** for very large data volumes.  

---

## **24. What are some Flow UI Components?**
- Screen Elements: Text Box, Picklist, Radio Buttons, Checkbox, File Upload.  
- Display Elements: Display Text, Images.  

---

## **25. How do you handle Flow performance issues?**
- Minimize number of **Get Records**.  
- Use **Decision elements** efficiently.  
- Use **Scheduled Paths** instead of waiting in Flow.  

---

✅ This file is ready for **GitHub** or personal notes.
