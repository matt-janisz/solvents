var assert = require('assert');
var multiples_of_3_and_5_brute_force =
    require('./multiples_of_3_and_5').multiples_of_3_and_5_brute_force;

describe('multiples_of_3_and_5', function() {
  describe('#multiples_of_3_and_5_brute_force()', function() {
    it('should be exclusive', function() {
      assert.equal(0, multiples_of_3_and_5_brute_force(3));
      assert.equal(3, multiples_of_3_and_5_brute_force(4));
      assert.equal(3, multiples_of_3_and_5_brute_force(5));
      assert.equal(8, multiples_of_3_and_5_brute_force(6));
    });
    it('should solve small example', function() {
      assert.equal(23, multiples_of_3_and_5_brute_force(10));
    });
    it('should solve large problem', function() {
      assert.equal(233168, multiples_of_3_and_5_brute_force(1000));
    });
  });
});
