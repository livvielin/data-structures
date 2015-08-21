var BinarySearchTree = function(value){

  var binarySearchTree = Object.create(BinarySearchTree.prototype);

  binarySearchTree.value = value;
  binarySearchTree.left = {};
  binarySearchTree.right = {};

  return binarySearchTree;

};

BinarySearchTree.prototype.insert = function(val) {
  if(val < this.value) {
    if(this.left.value === undefined) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
  if(val > this.value) {
    if(this.right.value === undefined) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
  if(val === this.value) {
    return;
  }
};

BinarySearchTree.prototype.contains = function(val) {
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

BinarySearchTree.prototype.depthFirstLog = function(cb, tree) {
  var tree = tree || this;
  cb(tree.value);
  if(tree.left.value !== undefined) {
    tree.left.depthFirstLog(cb, tree.left);
  }
  if(tree.right.value !== undefined) {
    tree.right.depthFirstLog(cb, tree.right);
  }
};

// var b = BinarySearchTree(5);
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
