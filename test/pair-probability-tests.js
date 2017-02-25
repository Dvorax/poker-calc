var assert = require('assert');
var calc = require('../src/pair-probability');

describe('pairProbability', () => {
    it('should give zero when there are no cards to draw', () => {
        assert.equal(0, calc(0));
    });

    it('should give 1 when there are 14 cards left to draw', () => {
        assert.equal(1, calc(14));
    });

    it('should give 1/13 when there are 2 cards to draw', () => {
        assert.equal(1 / 13, calc(2));
    });

    it('should give 1/13 + 12/13*2/13 when there are 3 cards to draw', () => {
        assert.equal(1/13 + 12/13*2/13, calc(3));
    });

    it('should give 1/13 + 12/13*2/13 + 11/13*3/13 when there are 3 cards to draw', () => {
        assert.equal(1/13 + 12/13*2/13 + 11/13*3/13, calc(3));
    });
});