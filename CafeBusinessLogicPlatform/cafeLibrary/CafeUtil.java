import java.util.ArrayList;

public class CafeUtil {

    public void militaryHoursTest() {
        // a method that prints all the numbers from 0 to 23.
        for(int hour = 0; hour < 24; hour++) {
            System.out.println(hour);
        }
    }
    
    // coffeeReminder
    public void coffeeNotification() {

        for(int hour = 0; hour < 24; hour++) {
            System.out.printf("It's %s:00 hours, do you need a coffee break?", hour);
        }
    }

    // Specials Alert
    public void specialsAlert() {
        // starting at 6 and ending at 15,
        // if the hour is a multiple of 3,
        // print "Buy one get one free for the next 15 minutes!"
        // Otherwise, print "Stay tuned for deals announced throughout the day."
        for(int hour = 6; hour <= 15; hour++) {
            if( hour % 3 == 0) {
                System.out.println("Buy one get one free for the next 15 minutes!");
            }
            else {
                System.out.println("Stay tuned for deals announced throughout the day.");
            }
        }
    }

    // The sales reps have a competetive rewards system in place.
    // They must increase their leads to 1 more than the day before each day
    // Or net the same amount at the end of 10 days.
    public int leadsAtDay10() {
        int sum = 0;
        for(int day = 1; day <= 10; day++) {
            sum+= day;
        }
        return sum;
    }

    // Display Coffee Menu
    public void displayMenu(String[] menuItems) {
        // Given an array of menu item names (strings), iterate through 
        // the array and print all the menu items in the array
        for (String item: menuItems) {
            System.out.println(item);
        }
    }

    // 
    public double getOrderTotal(double[] orderPrices) {
        double sum = 0;
        
        for (double price: orderPrices) {
            sum+= price;
        }
        return sum;

    }

    // Highest priced
    public double getHighestPrice(double[] priceInventory) {
        // Given an array of all the item prices,
        // find the highest price for any item
        double highest = priceInventory[0];
        
        for (double currentPrice: priceInventory) {
            if (currentPrice > highest) {
                highest = currentPrice;
            }
        }
        return highest;
    }
    
    public ArrayList<String> raffleWinners(String[] customers) {
        // Create an empty array, winners.
        ArrayList<String> winners = new ArrayList<String>();

        // Iterate over the given array of customers
        for(int i = -1; i < customers.length; i+= 4) {
            if (i > 0) {
                winners.add(customers[i]);
            }
        }
        return winners;
    }

}