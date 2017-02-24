var assert = require('assert');
var calc = require('../src/pair-probability');

describe('pairProbability', function() {
    it('should give zero when there are no cards and no more cards to draw', function() {
        assert.equal(0, calc(0));
    });
});