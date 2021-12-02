package zoo;

public class Gorilla extends Mammal {
	
	public void throwSomething() {
		System.out.println("The gorilla has thrown his shit at your face.");
		this.energyLevel -= 5;
		
	}
	
	public void eatBananas() {
		System.out.println("The gorilla laughs at your face while devouring a banana.");
		this.energyLevel += 10;
		
	}
	
	public void climb() {
		System.out.println("Jungle gorillas climb trees; mountain gorillas also climb trees but they climb mountains as well.");
		this.energyLevel -= 10;
		
	}


}
