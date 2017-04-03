"use strict";
var factorial = require('./factorial');

const pairProbability = (cardsLeft) => {
    if (cardsLeft < 2) {
        return 0;
    } else if (cardsLeft === 14) {
        return 1;
    }

    const magicNumber = cardsLeft - 1;
    const pairOnEarlierCards = pairProbability(magicNumber);
    const pairOnNthCard = chanceOfPairOnNthDraw(magicNumber);
    
    return pairOnEarlierCards + pairOnNthCard; 
};

const chanceOfPairOnNthDraw = (nthDraw) => {
    return chanceToHit(nthDraw) * chanceOfAvoidingEarlierHits(nthDraw);
};

const chanceOfAvoidingEarlierHits = (nthDraw) => {
    return factorial(12) / factorial(13 - nthDraw) / Math.pow(13, nthDraw - 1);
};

const chanceToHit = (nthDraw) => {
    return nthDraw / 13;
};

const chanceToMiss = (nthDraw) => {
    return 1 - chanceToHit(nthDraw);
};

module.exports = pairProbability;