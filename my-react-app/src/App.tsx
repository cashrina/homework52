import './App.css';
import {useState} from "react";
import CardDeck from "../src/lib/CardDeck.ts";
import Card from "./lib/Card.ts";
import PokerHand from "./lib/PokerHand.ts";
import CardView from "./components/Card/CardView.tsx";

const App = () => {
    const [allCards, setAllCards] = useState<Card[]>([]);
    const [handOutcome, setHandOutcome] = useState<string>("");

    const dealCards = () => {
        const deck = new CardDeck();
        const cards = deck.getCards(5);
        setAllCards(cards);

        const pokerHand = new PokerHand(cards);
        const outcome = pokerHand.getOutcome();
        setHandOutcome(outcome);
    };

    if (allCards.length === 0) {
        return (
            <button onClick={dealCards}>Deal the cards</button>
        );
    }

    return (
        <div>

              <div className="playingCards faceImages">
                  {allCards.map((card:Card, index:number) => (
                    <CardView key={index} rank={card.rank} suit={card.suit}/>
                  ))}
              </div>
            <p>result: {handOutcome}</p>
        </div>
    );
};

export default App;
