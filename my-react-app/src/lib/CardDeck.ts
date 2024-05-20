import Card from "../lib/Card.ts";

class CardDeck {
    private readonly cardRank: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    private readonly cardSuit: string[] = ['diams', 'hearts', 'clubs', 'spades'];
    public cards: Card[];
    constructor() {
        this.cards = [];
        for (const suit of this.cardSuit) {
            for (const rank of this.cardRank) {
                const card = new Card(rank, suit);
                this.cards.push(card);
            }
        }
    }

    public getCard(): Card | null {
        if (this.cards.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }

    public getCards(howMany:number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            if (card) {
                cards.push(card);
            } else {
                break;
            }
        }
        return cards;
    }
}

export default CardDeck;
