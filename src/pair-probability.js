const pairProbability = (cardsLeft) => {
    if (cardsLeft === 0) {
        return 0;
    } else if (cardsLeft === 14) {
        return 1;
    }

    return (13 - (cardsLeft - 2)) / 13 * (cardsLeft - 1) / 13 + pairProbability(cardsLeft - 1); 
};

module.exports = pairProbability;