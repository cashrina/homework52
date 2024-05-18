import React from "react";

interface CardProps {
    rank: string;
    suit: string;
}

const Card: React.FC<CardProps> = ({rank, suit}) => {
    let suitIcon = '';

    if (suit === '♣') {
        suitIcon = 'clubs';
    } else if (suit === '♦') {
        suitIcon = 'diams';
    } else if (suit === '♥') {
        suitIcon = 'herts';
    } else {
        suitIcon = 'spades';
    }

    return (
        <span className={`playingCards faceImages card rank-${rank} ${suitIcon}`}>
            <span className="rank">{rank.toUpperCase()}</span>
            <span className="suit">{suit}</span>
        </span>
    );
};

export default Card;