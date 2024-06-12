public class SimpleInterest {
	
    public static void calc(){
        Decimal principal = 50000, rate = 10, t = 3;
        
        Decimal SI = (principal * rate * t)/100;
        
        System.debug('Simple Interest =' +SI);
        
    }
}