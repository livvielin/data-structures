var RedBlackTree = function(value){

  var redBlackTree = Object.create(RedBlackTree.prototype);

  redBlackTree.value = value;
  redBlackTree.left = {};
  redBlackTree.right = {};

  return binarySearchTree;

};

RedBlackTree.prototype.insert = function(val) {
  if(val < this.value) {
    if(this.left.value === undefined) {
      this.left = RedBlackTree(val);
    } else {
      this.left.insert(val);
    }
  }
  if(val > this.value) {
    if(this.right.value === undefined) {
      this.right = RedBlackTree(val);
    } else {
      this.right.insert(val);
    }
  }
  if(val === this.value) {
    return;
  }
};

RedBlackTree.prototype.contains = function(val) {
  if(this.value === val) {
    return true;
  }
  if(val > this.value) {
    if(this.right.value === undefined) {
      return false;
    }
    return this.right.contains(val);
  }
  if(val < this.value) {
    if(this.left.value === undefined) {
      return false;
    }
    return this.left.contains(val);
  }
};

RedBlackTree.prototype.depthFirstLog = function(cb, tree) {
  var tree = tree || this;
  cb(tree.value);
  if(tree.left.value !== undefined) {
    tree.left.depthFirstLog(cb, tree.left);
  }
  if(tree.right.value !== undefined) {
    tree.right.depthFirstLog(cb, tree.right);
  }
};

// var b = RedBlackTree(5);
// b.insert(2);
// b.insert(1);
// b.insert(7);
// b.insert(6);
// console.log(b.left.right.value);
// console.log(b.right.left.value);
// console.log(b.contains(1));

/*
 * Complexity: What is the time complexity of the above functions?
 */
