const pairProbability = (cardsLeft) => {
    if (cardsLeft === 0) {
        return 0;
    } else if (cardsLeft === 14) {
        return 1;
    }

    const magicNumber = cardsLeft - 1; // what does this represent?
    return magicNumber / Math.pow(13, magicNumber) + pairProbability(magicNumber);
};

module.exports = pairProbability;