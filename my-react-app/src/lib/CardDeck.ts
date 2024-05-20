import Card from "../lib/Card.ts";

class CardDeck {
    public cards: Card[];

    constructor(ranks: string[], suits: string[]) {
        this.cards = [];
        for (const suit of suits) {
            for (const rank of ranks) {
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
