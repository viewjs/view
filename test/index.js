var scope = 'undefined' === typeof window
  ? require('scope')
  : require('viewjs-scope');

var view = 'undefined' == typeof window
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

});
