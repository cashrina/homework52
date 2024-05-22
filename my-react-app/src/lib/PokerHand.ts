import Card from "../lib/Card.ts";

class PokerHand{
    private cards: Card[];
    constructor(cards: Card[]) {
        this.cards = cards;
    }
    isOnePair() {
        const ranks = this.cards.map(card => card.rank);
        const countMap: {[key: string]: number } = {};
        for (const rank of ranks) {
            countMap[rank] = (countMap[rank] || 0) + 1;
            if (countMap[rank] === 2) {
                return true;
            }
        }
        return false;
    }

    isTwoPairs() {
        const ranks = this.cards.map((card) => {
            return card.rank;
        });
        const countMap: {[key: string]: number } = {};
        let pairsCount = 0;
        for (const rank of ranks) {
            countMap[rank] = (countMap[rank] || 0) + 1;
            if (countMap[rank] === 2) {
                pairsCount++;
                countMap[rank] = 0;
            }
        }
        return pairsCount === 2;
    }

    isThreeOfAKind() {
        const ranks = this.cards.map((card) => {
            return card.rank;
        });
        const countMap: { [key: string]: number } = {};
        for (const rank of ranks) {
            countMap[rank] = (countMap[rank] || 0) + 1;
            if (countMap[rank] === 3) {
                return true;
            }
        }
        return false;
    }

    isFlush() {
        const suit = this.cards[0].suit;
        for (let i = 1; i < this.cards.length; i++) {
            if (this.cards[i].suit !== suit) {
                return false;
            }
        }
        return true;
    }

    getOutcome() {
        switch (true) {
            case this.isFlush():
                return "Флэш";
            case this.isThreeOfAKind():
                return "Тройка";
            case this.isTwoPairs():
                return "Две пары";
            case this.isOnePair():
                return "Одна пара";
            default:
                return "Старшая карта";
        }
    }
}

export default PokerHand;