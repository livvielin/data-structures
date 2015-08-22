var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  newTree.parent = null;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  newTree.traverse = treeMethods.traverse;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
  tree.parent = this;
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

treeMethods.removeFromParent = function() {
  // remove tree as child of parent
  this.parent.children.splice(this.parent.children.indexOf(this), 1);
  // check if tree has children
  if (this.children.length !== 0) {
    // if tree has children, iterate through tree's children
    for (var i = 0; i < this.children.length; i++) {
      // set tree's children's parent to tree's parent
      this.children[i].parent = this.parent;
      // add tree's children to parent
      this.parent.children.push(this.children[i]);
    }
    // set tree's children to null
    this.children = null;
  }
  // set tree's parent to null
  this.parent = null;
};

treeMethods.traverse = function(cb, currentTree) {
  // set default for currentTree
  currentTree = currentTree || this;
  // check if tree has a value
  if (currentTree.value !== undefined) {
    // if tree has a value, apply callback function
    cb(currentTree.value);
  }
  // check if tree has children
  if (currentTree.children.length !== 0) {
    // if tree has children, iterate through children
    for (var i = 0; i < currentTree.children.length; i++) {
      // recursively call traverse
      currentTree.children[i].traverse(cb, currentTree.children[i]);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
