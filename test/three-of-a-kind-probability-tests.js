var assert = require('chai').assert;
var calc = require('../src/three-of-a-kind-probability');

describe('ThreeOfAKindProbability', () => {
    it('should give zero when there are no cards to draw', () => {
        assert.equal(0, calc(0));
    });
});