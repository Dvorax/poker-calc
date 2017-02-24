module.exports = (cardsLeft) => {
    if (cardsLeft === 0) {
        return 0;
    }

    return 1 / 13;
};