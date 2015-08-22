var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.numKeys = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === undefined) {
    this._storage.set(i, []);
  } else {
    for(var tuple = 0; tuple < this._storage.get(i).length; tuple++) {
      if(this._storage.get(i)[tuple][0] === k) {
        this._storage.get(i)[tuple][1] = v;
        return;
      }
    }
  }
  this._storage.get(i).push(entry(k, v));
  this.numKeys++;
  if(this.numKeys / this._limit >= .75) {
    this._limit = this._limit * 2;
    this.reassign();
  }
};

HashTable.prototype.reassign = function() {
  var newHash = this.call();
  //var newStorage = LimitedArray.call(this._limit);
  this._storage.each(function(bucket) {
    for(var tuple = 0; tuple < this._storage.get(i).length; tuple++) {
      var k = bucket[tuple][0];
      var v = bucket[tuple][1];
      newHash.insert(k, v);
    }
  });
  this._storage = newHash._storage;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var tuple = 0; tuple < this._storage.get(i).length; tuple++) {
    if(this._storage.get(i)[tuple][0] === k) {
      return this._storage.get(i)[tuple][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var tuple = 0; tuple < this._storage.get(i).length; tuple++) {
    if(this._storage.get(i)[tuple][0] === k) {
      this._storage.get(i)[tuple][1] = null;
    }
  }
};

var entry = function(key, value) {
  var prop = [key, value];
  return prop;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var test = new HashTable();
// test.insert('Steven', 'Larkin');
// test.insert('Bob', 'Jones');
// test.insert('Alice', 'Larkin');
// test.insert('Peter', 'Larkin');
// test.insert('Na', 'Larkin');
// test.insert('Carl', 'Larkin');
// test.insert('Hello', 'World');
// test.insert('Tom', 'Larkin');
// test.insert('Tim', 'Larkin');
// test.insert('Kyle', 'Larkin');
// test.insert('Hi', 'World');
