var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var count = 0;

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var firstKey = Object.keys(storage)[0];
    var front = storage[firstKey];
    delete storage[firstKey];
    return front;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
