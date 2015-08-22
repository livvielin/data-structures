var DoubleLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      this.prev = list.tail;
      this.prev.next = newNode;
      list.tail = newNode;
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
    return temp.value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode) {
      if(currentNode.value === target) {
        return true;
      } else if(currentNode !== list.tail) {
        currentNode = currentNode.next;
      } else {
        return false;
      }
    }
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
