public class ArithmeticOp {
    
    public static void Addition(Decimal N1,Decimal N2){
        Decimal AddAns;
        AddAns = N1 + N2;
        System.debug('Addition is ' + AddAns);
    }
    public static void Subtraction(Decimal N1,Decimal N2){
        Decimal SubAns;
        SubAns = N1 - N2;
        System.debug('Subtraction is ' + SubAns);
    }
    public static void Multiplication(Decimal N1,Decimal N2){
        Decimal MulAns;
        MulAns = N1 * N2;
        System.debug('Addition is ' + MulAns);
    }
    public static void Division(Decimal N1,Decimal N2){
        Decimal DivAns;
        DivAns = N1 / N2;
        System.debug('Division is ' + DivAns);
    }
}