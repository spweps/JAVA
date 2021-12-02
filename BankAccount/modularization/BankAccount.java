public class BankAccount {
	
	private double checkingBalance;
	private double savingsBalance;
	public static int numberOfAccounts = 0;
	
	public BankAccount(int checkingBalanceParam, int savingsBalanceParam) {
		checkingBalance = checkingBalanceParam;
		savingsBalance = savingsBalanceParam;
		numberOfAccounts++;
	}
	
	public static int bankAccountCount() {
		return numberOfAccounts;
	}
	
	public int getcheckingBalance() {
		return checkingBalance;
	}
	
	public int getsavingsBalance() {
		return savingsBalance;
	}
	
	public int depositMoney(int amount, String checkingOrSavings) {
		if (checkingOrSavings.equals("Checking")) {
			checkingBalance += amount;
			return checkingBalance;
	
		}
		else if(checkingOrSavings.equals("Savings")) {
			savingsBalance += amount;
			return savingsBalance;
			
		}
		return -1;
	}
	
	public int withdrawMoney(int amount, String checkingOrSavings) {
		if (checkingOrSavings.equals("Checking")) {
			if (checkingBalance >= amount) {
				checkingBalance -= amount;
			}
			else { 
				System.out.println("You're a broke mofo--get a job, or rob a bank");
			}	
		}
		else if(checkingOrSavings.equals("Savings")) {
			if (savingsBalance >= amount) {
				savingsBalance -= amount;
			}
			else { 
				System.out.println("You're a broke mofo--get a job or rob a bank");
			}
		}
		
	}
	
	public int viewAccountTotal() {
		return savingsBalance + checkingBalance;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}