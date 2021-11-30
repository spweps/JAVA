import java.util.Date;
import java.util.ArrayList;


public class CafeUtil{
	
	public int getStreakGoal() {
		int numWeeks = 10;
		int sum = 0;
		
		for (int i=1; i <= numWeeks; i++ ) {
			sum += i;		
		}
		return sum;

	}
	public double getOrderTotal(double[] prices) {
		double sumPrices = 0;
		for (int i =0; i < prices.length; i++) {
			sumPrices += prices[i];
		}
		return sumPrices;
		
	}
	public void displayMenu(ArrayList<String> menuItems) {
		for (int i = 0; i < menuItems.length(); i++) {
			System.out.printf(i + "" + menuItems.get(i) + '\n');
		
		}
		
		
	}
	public void addCustomer(ArrayList<String>) {
		int numPersons = 0;
		System.out.println("Please enter your name");
		String userName = System.console().readLine();
		System.out.println("Hello, " + userName + "!");
		System.out.println("There are " numPersons + "people in front of you.");
		
		customerList.add(userName);
		System.out.println(customerList);
	}
}
