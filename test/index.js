var scope = require('viewjs-scope')
var view  = 'undefined' == typeof window
  ? require('..')
  : require('view'); // how to do this better?

var assert = require('assert');

describe('view', function(){

  it('should return a function', function() {
    assert.equal('function', typeof view);
  });

  it('should create a new View instance.', function() {
    var v = view();
    assert(new v() instanceof v);
  });

  it('should define a new plugin', function() {
    var attached = false;
    var v = view()
      .use(function plugin() {
        return function(View) {
          attached = true;
        };
      }());
    assert.equal(attached, true);
  });

  it('should add a prototype method onto the View', function() {
    var v = view()
      .use(function plugin() {
        return function(View) {
          View.prototype.compile = function() {
            return true;
          };
        };
      }());

    var instance = new v();

    assert.equal('function', typeof instance.compile);
    assert.equal(instance.compile(), true);
  });

  it('should add a static method onto the View', function() {
    var v = view()
      .use(function plugin() {
        return function(View) {
          View.compile = function() {
            return true;
          };
        };
      }());

    assert.equal('function', typeof v.compile);
    assert.equal(v.compile(), true);
  });

});
