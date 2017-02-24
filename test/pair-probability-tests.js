var assert = require('assert');
var calc = require('../src/pair-probability');

describe('pairProbability', () => {
    it('should give zero when there are no cards and no more cards to draw', () => {
        assert.equal(0, calc(0));
    });
});