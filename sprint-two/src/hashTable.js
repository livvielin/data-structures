var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
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
