var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

// newTree.children = {};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target, result){

  var result = result || false;

  if(this.value === target) {
    result = true;
  } else if(this.children.length !== 0) {
    for(var i = 0; i < this.children.length; i++) {
      result = this.children[i].contains(target, result);  
    }
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
