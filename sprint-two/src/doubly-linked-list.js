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
      list.tail.next = newNode;
      newNode.prev = list.tail;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    if(list.head === list.tail) {
      list.head = null;
      list.tail = null;
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

  list.addToHead = function(value){
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  };

  list.removeTail = function(){
    var temp = list.tail;
    if (list.tail === list.head) {
      list.tail = null;
      list.head = null;
    } else {
      list.tail.prev.next = null;
      list.tail = list.tail.prev;
    }
    return temp.value;
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
