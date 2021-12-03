package AbstractArt;

public class Museum {

	public static void main(String[] args) {
		Painting MonaLisa = new Painting("Mona Lisa", "Michaelangelo", "World famous painting", "oil");
		Painting StarryNight = new Painting ("Starry Night", "Van Gogh", "Epic lunatic but brilliant painter", "oil");
		Painting Clocks = new Painting ("Clock", "Salvatore Dali", "Epic, epic mustache", "acrylic");
		Sculpture TheDavid = new Sculpture ("The David", "Michaelangelo", "World famous sculpture", "marble");
		Sculpture TheThinker = new Sculpture ("The Thinker", "Auguste Rodin", "A think man's thinker", "bronze");
		
		MonaLisa.viewArt();


	}

}
