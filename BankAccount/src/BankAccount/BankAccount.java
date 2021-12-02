package BankAccount;

public class BankAccount {
	private double checkingBalance;
	private double savingsBalance;
	public static int numberOfAccounts = 0;
	
	public BankAccount(int checkingBalanceParam, int savingsBalanceParam) {
		this.checkingBalance = checkingBalanceParam;
		this.savingsBalance = savingsBalanceParam;
		numberOfAccounts++;
	}
	
	public static int bankAccountCount() {
		return numberOfAccounts;
	}
	
	public double getcheckingBalance() {
		return this.checkingBalance;
	}
	
	public double getsavingsBalance() {
		return this.savingsBalance;
	}
	
	public double depositMoney(int amount, String checkingOrSavings) {
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
	
	public void withdrawMoney(int amount, String checkingOrSavings) {
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
	
	public double viewAccountTotal() {
		return savingsBalance + checkingBalance;
	}

	public BankAccount() {
		// TODO Auto-generated constructor stub
	}

}
