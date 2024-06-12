public class RectangleWithConstructor {

    Decimal length,breadth;   //Variable Creation
    
    public RectangleWithConstructor(Decimal l, Decimal b){     //Constructor
        length = l;
        breadth = b;
    } 
    //Method 1
    public void area(){
        Decimal a= length * breadth;
        System.debug('Area =' +a);
    }
    //Method 2
    public void perimeter(){
        Decimal p = 2 * (length + breadth);
        System.debug('Perimeter =' +p);
    }
}