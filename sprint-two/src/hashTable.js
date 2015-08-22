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
    this.numKeys = 0;
    this.reassign(this._limit * 2);
  }
};

HashTable.prototype.reassign = function(newLimit) {
  var context = this;
  var oldStorage = this._storage;
  
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);

  oldStorage.each(function(bucket) {
    if (bucket !== undefined) {
      for(var tuple = 0; tuple < bucket.length; tuple++) {
        var k = bucket[tuple][0];
        var v = bucket[tuple][1];
        if (v !== null) {
          context.insert(k, v);
        }
      }
    }
  });
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
  this.numKeys--;
  if(this.numKeys / this._limit <= .25 && this._limit > 8) {
    this.numKeys = 0;
    this.reassign(this._limit / 2);
  }
};

var entry = function(key, value) {
  var prop = [key, value];
  return prop;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
