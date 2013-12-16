var assert = require('assert');
var fortytwo = require('./fortytwo');

describe('fortytwo', function() {
  describe('#fortytwo()', function() {
    it('should return 42', function() {
      assert.equal(42, fortytwo.fortytwo());
    })
  })
})
