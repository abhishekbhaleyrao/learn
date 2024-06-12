public class Square {
    
    //Method 1
    public static void area( Decimal a){   
       Decimal  area;   
        area = a * a;
        System.debug('Area =' +area);
     }
    //Method 2
    public static void perimeter(Decimal a){
        Decimal peri;
        peri = 4 * a;
        System.debug('Perimeter =' +peri);
     }
}