
/**
 * Expose `View`.
 */

module.exports = View;

/**
 * Instantiate a new `View`.
 */

function View(data, opts, parent) {
  // linked-list
  this._first = this;
  this._last = this;
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;
  if (data) this.data = data;
  if (parent) this.parent = parent;
}

/**
 * Mixins for view.
 */

View.use = function(fn){
  fn(this);
  return this;
};