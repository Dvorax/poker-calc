"use strict";

const pairProbability = (cardsLeft) => {
    if (cardsLeft === 0) {
        return 0;
    } else if (cardsLeft === 14) {
        return 1;
    }

    const pairOnEarlierCards = pairProbability(cardsLeft - 1);
    const pairOnNthCard = (cardsLeft - 1) / 13;
    let avoidEarlierPairs = 1;
    for (let i = 1; i + 1 < cardsLeft; i++) {
        avoidEarlierPairs = avoidEarlierPairs * (13 - (cardsLeft - 1 - i)) / 13;
    }
    
    return pairOnEarlierCards + avoidEarlierPairs * pairOnNthCard; 
};

module.exports = pairProbability;