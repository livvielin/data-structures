var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Stack.prototype.push = function(val) {
  this.storage[Object.keys(this.storage).length] = val;
};

Stack.prototype.pop = function() {
  var storage = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return storage;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
