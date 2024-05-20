import './App.css';
import Card from "./components/Card/Card.tsx";

interface CardRank {
    [key: string]:string;
}

const cardRank:CardRank = {
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    J: 'j',
    Q : 'q',
    K: 'k',
    A: 'a',
};

interface CardSuit {
    diams:string;
    hearts: string;
    clubs: string;
    spades: string;
}
const cardSuit :CardSuit = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
};

const App = () => {
  return (
      <div className="playingCards faceImages">
        <Card rank={cardRank['K']} suit={cardSuit.spades} />
      </div>
    );
};

export default App;
