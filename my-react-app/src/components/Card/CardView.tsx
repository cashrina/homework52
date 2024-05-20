import React from "react";

interface CardProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<CardProps> = (card) => {
    let suitIcon = '';

    if (card.suit === 'clubs') {
        suitIcon = '♣';
    } else if (card.suit === 'diams') {
        suitIcon = '♦';
    } else if (card.suit === 'herts') {
        suitIcon = '♥';
    } else {
        suitIcon = '♠';
    }

    return (
        <span className={`playingCards faceImages card rank-${card.rank} ${card.suit}`}>
            <span className="rank">{card.rank.toUpperCase()}</span>
            <span className="suit">{suitIcon}</span>
        </span>
    );
};

export default CardView;