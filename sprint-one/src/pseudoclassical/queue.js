var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.front = 0;
};

Queue.prototype.enqueue = function(val) {
    this.storage[this.length] = val;
    this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.length === 0) {
    return;
  }
  var temp = this.storage[this.front];
  delete this.storage[this.front];
  if(this.length === 0) {
    this.front = 0;
  } else {
    this.front++;
  }
  return temp;
};

Queue.prototype.size = function() {
  var context = this;
  return Object.keys(context.storage).length;
};