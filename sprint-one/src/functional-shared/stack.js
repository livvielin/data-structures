var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    length : 0
  };
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
};

stackMethods.pop = function() {
  if (this.length === 0) {
    return;
  }
  var temp = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return temp;
};

stackMethods.size = function() {
  return this.length;
};