
/**
 * Expose `View`.
 */

module.exports = View;

/**
 * Instantiate a new `View`.
 */

function View() {
  // linked-list
  this._first = this;
  this._last = this;
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;
}

/**
 * Mixins for view.
 */

View.use = function(fn){
  fn(this);
  return this;
};