import java.util.Scanenr;
class TrafficLight {
public static void main(String[] args) {
Scanner scan= new Scanner(System.in);
System.out.println("ENTER RED GREEN OR YELLOW:");
while(true){
String signal=scan.nextLine();
if(signal=="red"){
System.out.println("STOP");
break;
}
else if(signal=="green"){
System.out.println("GO");
break;
}
else if(signal=="yellow"){
System.out.println("GO");
break;
}
else{
  System.out.println("Enter AGAIN FROM ABOVE OPTION");
}
}



}
}
