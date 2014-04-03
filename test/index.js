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
    assert(view() instanceof view.View);
  });

  it('should expose a ViewInstance', function() {
    assert.equal('function', typeof view.ViewInstance);
  });

  it('should create a new ViewInstance', function() {
    var SomeView = view();
    assert(SomeView.create() instanceof view.ViewInstance);
  });

  it('should create a new scope when instantiating a ViewInstance', function() {
    var SomeView = view();
    var instance = SomeView.create();
    assert(instance.scope instanceof scope.Scope);
  });

  it('should save properties when instantiating a ViewInstance', function() {
    var SomeView = view();
    var instance = SomeView.create({ foo: 123 });
    assert.deepEqual(instance.properties, { foo: 123 });
  });

  it('should pass a plugin and it should run', function() {
    var v = view();
    var i = 0;

    function plugin() {
      return function(View) {
        i++;
      };
    }

    v.use(plugin());
    assert.equal(i, 1);
  });

  it('should attach a method to `View` within a plugin', function() {
    var v = view();

    function plugin() {
      return function(View) {
        var collection = [];
        View.directive = function(name, fn) {
          collection.push({ name: name, fn: fn });
          collection[name] = fn;
        };
      }
    }

    v.use(plugin());
    assert.equal('function', typeof v.directive);
  });

});
