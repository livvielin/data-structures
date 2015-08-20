var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      this.prev = list.tail;
      this.prev.next = Node(value);
      list.tail = Node(value);
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    if(list.head === list.tail) {
      list.head = null;
    } else {
      list.head = list.head.next;
      this.prev = null;
    }
    return temp;
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
