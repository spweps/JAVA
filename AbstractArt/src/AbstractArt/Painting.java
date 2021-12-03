package AbstractArt;

public class Painting extends Art {
	private String paintType;
	

	public Painting(String title, String author, String description, String paintType) {
		super(title, author, description);
		this.paintType = paintType;
	}

	public String getPaintType() {
		return paintType;
	}

	public void setPaintType(String paintType) {
		this.paintType = paintType;
	}

	@Override
	public void viewArt() {
		System.out.println(this.getTitle() + "was painted by" + this.getAuthor() + "out of" + this.getPaintType() + "and is considered" + this.getDescription());
		
	}
	
	

}
