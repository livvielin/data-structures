describe('redBlackTree', function() {
  var redBlackTree;

  beforeEach(function() {
    redBlackTree = RedBlackTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(redBlackTree.insert).to.be.a("function");
    expect(redBlackTree.contains).to.be.a("function");
    expect(redBlackTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.insert(7);
    redBlackTree.insert(6);
    expect(redBlackTree.left.right.value).to.equal(3);
    expect(redBlackTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.insert(7);
    expect(redBlackTree.contains(7)).to.equal(true);
    expect(redBlackTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should have a black root', function() {
    expect(redBlackTree.color).to.equal('black');
  });

  it('should properly color nodes such that children of a red node are black', function() {
    redBlackTree.insert(7);
    redBlackTree.insert(3);
    redBlackTree.insert(8);
    redBlackTree.insert(2);
    redBlackTree.insert(6);
    redBlackTree.insert(4);
    redBlackTree.insert(1);
    expect(redBlackTree.left.color).to.equal('red');
    expect(redBlackTree.left.right.color).to.equal('black');
    expect(redBlackTree.left.left.color).to.equal('black');
    expect(redBlackTree.left.left.left.color).to.equal('red');
  });

  it('should properly restructure nodes when red child\'s red parent\'s sibling is black or null (right rotation)', function() {
    redBlackTree.insert(3);
    redBlackTree.insert(1);
    expect(redBlackTree.value).to.equal(3);
    expect(redBlackTree.color).to.equal('black');
    expect(redBlackTree.left.value).to.equal(1);
    expect(redBlackTree.left.color).to.equal('red');
    expect(redBlackTree.right.value).to.equal(5);
    expect(redBlackTree.right.color).to.equal('red');
  });

  it('should properly restructure nodes when red child\'s red parent\'s sibling is black or null (left rotation)', function() {
    redBlackTree.insert(3);
    redBlackTree.insert(4);
    expect(redBlackTree.value).to.equal(4);
    expect(redBlackTree.color).to.equal('black');
    expect(redBlackTree.left.value).to.equal(3);
    expect(redBlackTree.left.color).to.equal('red');
    expect(redBlackTree.right.value).to.equal(5);
    expect(redBlackTree.right.color).to.equal('red');
  });

  xit('should distribute nodes such that every branch has the same number of black nodes', function() {
    //
  });

  xit('should automatically redistribute and recolor nodes when height is greater than 2log2n', function() {
    //
  });
});
