const pairProbability = (cardsLeft) => {
    if (cardsLeft === 0) {
        return 0;
    } else if (cardsLeft === 14) {
        return 1;
    }

    const pairOnEarlierCards = pairProbability(cardsLeft - 1);
    const avoidEarlierPairs = (13 - (cardsLeft - 2)) / 13;
    const pairOnNthCard = (cardsLeft - 1) / 13;
    
    return pairOnEarlierCards + avoidEarlierPairs * pairOnNthCard; 
};

module.exports = pairProbability;