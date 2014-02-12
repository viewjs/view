var view = 'undefined' == typeof window
  ? require('..')
  : require('view'); // how to do this better?

var assert = require('assert');

describe('view', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
