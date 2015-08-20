var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var someInstance = Object.create(stackMethods);
 someInstance.storage = {};
 return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[Object.keys(this.storage).length] = val;
};

stackMethods.pop = function() {
  var storage = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return storage;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

