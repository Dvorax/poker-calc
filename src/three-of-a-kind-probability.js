"use strict";
var factorial = require('./factorial');

const threeOfAKindProbability = (cardsLeft) => {
    return cardsLeft == 0 ? 0 : Math.pow(1 / 13, 2);
};

module.exports = threeOfAKindProbability;