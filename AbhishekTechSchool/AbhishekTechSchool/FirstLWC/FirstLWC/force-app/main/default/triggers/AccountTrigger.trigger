trigger AccountTrigger on Account (before insert, after insert){
    if (Trigger.isInsert){
         if (Trigger.isBefore){
    AccountTriggerHandler.updateDesc(Trigger.new); 		//Calling Mentod
    AccountTriggerHandler.populateRating(Trigger.new); 	//Calling Mentod
	//System.debug('Trigger before insert event');
         }else if (Trigger.isAfter){
             
             AccountTriggerHandler.createOpp(Trigger.new);  //In after insert Trigger.new is readonly
         }
	}
}