public class TestDeck {

	public static void main(String[] args) {
		
		Deck myDeck = new Deck();
		for (Card card: myDeck.getCards()) {
			card.showCard();
		}

		// Create a Card Game!!
		
		// #1) Highlow - A deck of cards is shuffled, and one card is dealt from the deck and shown to the user. The user predicts whether the next card from the deck will be higher or lower than the current card. If the user predicts correctly, then the next card from the deck becomes the current card, and the user makes another prediction. This continues until the user makes an incorrect prediction. The number of correct predictions is the user's score.

		// #2) WAR
		// The Deal

		// The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places their stack of cards face down, in front of them.
		// The Play

		// Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.

		// If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.
		// How to Keep Score

		// The game ends when one player has won all the cards.
		
	}
}
