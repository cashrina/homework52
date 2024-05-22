import Card from "../lib/Card.ts";

class PokerHand{
    private cards: Card[];
    private readonly cardRank: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];

    constructor(cards: Card[]) {
        this.cards = cards;
    }
    isOnePair() {
        const ranks = this.cards.map((card) => {
            return card.rank;
        });
        for (const rank of ranks) {
            const cardsWithRank = ranks.filter((cardRank) => {
                return cardRank === rank;
            });
            if (cardsWithRank.length === 2) {
                return true;
            }
        }
        return false;
    }

    isTwoPairs() {
        const ranks = this.cards.map((card) => {
            return card.rank;
        });
        let pairsCount = 0;
        const checkedRanks: string[] = [];

        for (const rank of ranks) {
            let found = false;
            for (const checkedRank of checkedRanks) {
                if (checkedRank === rank) {
                    found = true;
                    break;
                }
            }
            if (!found && ranks.filter((cardRank) => {
                return cardRank === rank;
            }).length === 2) {
                pairsCount++;
                checkedRanks.push(rank);
            }

        }
        return pairsCount === 2;
    }

    isThreeOfAKind() {
        const ranks = this.cards.map((card) => {
            return card.rank;
        });
        for (const rank of ranks) {
            if (ranks.filter(cardRank => {
                return cardRank === rank;
            }).length === 3) {
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

    isStraightFlush() {
        const suit = this.cards[0].suit;
        for (let i = 1; i < this.cards.length; i++) {
            if (this.cards[i].suit !== suit) {
                return false;
            }
        }
        const sortedRanks = this.cards.map(card => card.rank).sort((a, b) => {
            return this.cardRank.indexOf(a) - this.cardRank.indexOf(b);
        });
        for (let i = 0; i < sortedRanks.length - 1; i++) {
            if (this.cardRank.indexOf(sortedRanks[i + 1]) - this.cardRank.indexOf(sortedRanks[i]) !== 1) {
                return false;
            }
        }
        return true;
    }
    getOutcome() {
        switch (true) {
            case this.isStraightFlush():
                return "Стрит";
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