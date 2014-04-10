var scope = typeof window === 'undefined'
    ? require('viewjs-scope')
    : require('scope');

exports = module.exports = view;

/**
 * A type constructor that makes it a little nicer to work with
 * chainable objects.
 *
 * view()
 *   .use(...)
 */

function view() {

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
    this.renderer = null;
    this.scope    = scope();
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
   * @param {Function} fn Callback
   * @chainable
   * @return {View}
   */

  View.use = function(fn) {
    if ('function' !== typeof fn) {
      throw new Error("A plugin must be a function.");
    }

    fn(View);
    return this;
  };

  return View;
}