package zoo;

public class Bat extends Mammal{
	private double energyLevel = 300;
	
	public void fly() {
		System.out.println("Random sound of a bat taking off? Wtf?");
		energyLevel -= 50;
	}
	
	public void eatHumans() {
		System.out.println("Another soul for my stomach.");
		energyLevel += 25;
		
	}
	
	public void attackTown() {
		System.out.println("Flames. Town burning. People screaming. Babies kicking ass and taking names.");
		energyLevel -= 100;
		
	}

}
