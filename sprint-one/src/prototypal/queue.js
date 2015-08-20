var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[Object.keys(this.storage).length] = val;
};

queueMethods.dequeue = function() {
  var firstKey = this.storage[Object.keys(this.storage)[0]];
  for(var i = 0; i < (Object.keys(this.storage).length - 1); i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return firstKey;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
