public class AccountTriggerHandler {
    public static void createOpp(list<Account> accList){
       List<Opportunity> oppList = new List<Opportunity>();
        
        
        for(Account acc : accList){
           Opportunity opp = new Opportunity();
           
            opp.Name = acc.Name;
            opp.CloseDate = System.today(); //Store today's date
            opp.StageName = 'Prospecting';
            opp.AccountId = acc.Id;
            
            oppList.add(opp);          
        }
        if (!oppList.isEmpty()){			//Null check
            
            insert oppList;
        }
        
    } 
    
    
    
    public static void updateDesc(list<Account> accList){
        for(Account acc : accList){
            acc.Description ='Account is Created';
        }          
   }
    public static void populateRating(list<Account> accList){
         for(Account acc : accList){
        	 if(acc.Industry != null && acc.Industry == 'Media'){
           
            	acc.Rating='Hot';
            }
        }
    }
}