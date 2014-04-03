var scope = typeof window === 'undefined'
    ? require('viewjs-scope')
    : require('scope');

exports              = module.exports = view;
exports.View         = View;
exports.ViewInstance = ViewInstance;

/**
 * A type constructor that makes it a little nicer to work with
 * chainable objects.
 *
 * view()
 *   .use(...)
 */

function view() {
  return new View();
}

/**
 * A view describes a very barebones view system. Most of the components
 * are not built-in and is instead used through plugins. 
 *
 * View only interacts with the scope and an empty template function. The rest
 * is done through plugins.
 *
 * For example, if you want dirty-checking, that's a separate plugin. HTML renderer?
 * Plugin. SVG renderer? Plugin. This allows an extremely modular core that allows
 * quick iteration and expansion.
 */

function View() {
  this.template = function() {};
}

/**
 * Use a specific plugin with the view system. Each plugin should be
 * of the following structure:
 *
 * ```js
 * function pluginA() {
 *    return function(View) {
 *       // Implementation here...
 *    };
 * }
 * ```
 *
 * Thus, you would use it as:
 *
 * ```js
 * view()
 *   .use(pluginA());
 * ```
 *
 * Quite similar to express/connect middleware.
 *
 * @chainable
 */

View.prototype.use = function(fn) {
  fn(this);
  return this;
};

/**
 * Create a new ViewInstance that will represent a useable object.
 *
 * Usage:
 *
 * ```js
 * var SomeView = view();
 *
 * SomeView.create(); // New view instance.
 * ```
 */

View.prototype.create = function(properties) {
  return new ViewInstance({
    view: this,
    properties: properties
  });
};

/**
 * ViewInstance
 */

function ViewInstance(options) {
  this.view       = options.view;
  this.properties = options.properties;

  // A root scope that is the most parent scope. Each view has it's own
  // root scope.
  this.scope      = scope();
}
