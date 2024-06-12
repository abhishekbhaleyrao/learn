public class AccountRecord {
   
    public static ID insertAccount(String name, String rating, String active){
        Account acc = new Account();
        acc.Name = name;
        acc.Rating = rating;
        acc.Active__c = active;
        
        insert acc; // this will insert a record into org
        
        return acc.Id; // After creation of account record, Its ID will be available in acc
    }
    
    public static void insertContact(){
        
        Id accId;   //Creating variable
        accId = insertAccount('Swapnil','Hot','Yes');     //Calling method
        Contact con = new Contact(FirstName = 'Contact 101', LastName ='Con 201');
        con.accountId = accId;  //accountID is lookup to account
        insert con;
    }
    
    public static void insertAccountWithConAndOpp(String name, String rating, String active){
        Account acc = new Account();
        acc.Name = name;
        acc.Rating = rating;
        acc.Active__c = active;
        
        insert acc; // this will insert a record into org
       
   	
    	Contact con = new Contact(FirstName = 'Contact 101', LastName ='Con 201');
        con.accountId = acc.Id;  //accountID is lookup to account
        insert con;
        
        Opportunity opp = new Opportunity();
        opp.Name = 'Opp 101';
        opp.CloseDate = System.today();  // System.today() is used to punch today's date
        opp.StageName = 'Prospecting';
        opp.AccountId = acc.Id;
        insert opp;
        
    
    }
    
}