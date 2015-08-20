var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    addedIndex : 0,
    firstKey : 0,
    length : 0
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
};

queueMethods.enqueue = function(val) {
  this.storage[this.addedIndex] = val;
  this.addedIndex++;
  this.length++;
};

queueMethods.dequeue = function() {
  if (this.length === 0) {
    return;
  }
  var firstValue = this.storage[this.firstKey];
  delete this.storage[this.firstKey];
  this.firstKey++;
  this.length--;
  return firstValue;
};

queueMethods.size = function() {
  return this.length;
};

