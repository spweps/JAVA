public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        String displayNewTotalMessage = "Your new total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripPrice = 1.00;
        double lattePrice = 5.00;
        double cappuccinoPrice = 7.00;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "JimBobBillyDick";
        String customer3 = "Cheryl";
        String customer4 = "Georgia";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1);
        System.out.println(customer1 + pendingMessage);
        if (isReadyOrder2) {
        	System.out.println(customer2 + readyMessage);
        	System.out.println(displayTotalMessage + cappuccinoPrice);
        }
        if (isReadyOrder3) {
        	System.out.println(customer3 + readyMessage);
        	System.out.println(displayTotalMessage + lattePrice*2);
        	
        }
        else {
        	System.out.println(customer3 + pendingMessage);
        }
        System.out.println(customer4 + readyMessage);
        System.out.println(customer4 + displayTotalMessage + dripPrice);
        System.out.println(customer4 + displayNewTotalMessage + (lattePrice-dripPrice));
    }
}
