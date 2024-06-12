public class RectangleStaticDemo {
	//Method 1
    public Static void area(){
        Decimal length = 5.5, breadth = 6;  //Variable Creation
        Decimal a= length * breadth;
        System.debug('Area =' +a);
    }
    //Method 2
    public Static void perimeter(){
        Decimal length = 5.5, breadth = 6;  //Variable Creation
        Decimal p = 2 * (length + breadth);
        System.debug('Perimeter =' +p);
    }
}