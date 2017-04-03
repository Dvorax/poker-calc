var assert = require('chai').assert;
var calc = require('../src/three-of-a-kind-probability');

describe('ThreeOfAKindProbability', () => {
    it('should give zero when there are no cards to draw', () => {
        assert.equal(0, calc(0));
    });
    it('should give 1/13^2 when there are three cards to draw', () => {
        assert.equal(Math.pow(1/13, 2), calc(3));
    });
});