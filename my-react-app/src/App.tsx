import './App.css';
import {useState} from "react";
import CardDeck from "../src/lib/CardDeck.ts";
import Card from "./lib/Card.ts";
import PokerHand from "./lib/PokerHand.ts";
import CardView from "./components/Card/CardView.tsx";

const App = () => {
    const [allCards, setAllCards] = useState<Card[]>([]);
    const [handOutcome, setHandOutcome] = useState<string>("");
    const [cardsLeftInDeck, setCardsLeftInDeck] = useState<number>(52);

    const dealCards = () => {
        if (cardsLeftInDeck === 0) {
            return;
        }

        const deck = new CardDeck();
        const cards = deck.getCards(5);
        setAllCards(cards);

        const pokerHand = new PokerHand(cards);
        const outcome = pokerHand.getOutcome();
        setHandOutcome(outcome);

        setCardsLeftInDeck(cardsLeftInDeck - 5);
    };

    return (
        <div>
            {cardsLeftInDeck > 0 && (
                <button onClick={dealCards}>Раздать карты</button>
            )}
            {allCards.length > 0 && (
                <div>
                    <div className="playingCards faceImages">
                        {allCards.map((card: Card, index: number) => (
                            <CardView key={index} rank={card.rank} suit={card.suit}/>
                        ))}
                    </div>
                    <p>Текущая рука: {handOutcome}</p>
                </div>
            )}
            {cardsLeftInDeck === 0 && <p>Карт в колоде больше нет</p>}
        </div>
    );
};

export default App;
