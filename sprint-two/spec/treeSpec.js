describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should have a property named "parent"', function() {
    expect(tree.hasOwnProperty("parent")).to.equal(true);
  });

  it('should have a method named "removeFromParent"', function() {
    expect(tree.removeFromParent).to.be.a("function");
  });

  it('should have a method named "traverse"', function() {
    expect(tree.traverse).to.be.a("function");
  });

  it('should disassociate tree with its parent in both directions when removeFromParent is called', function() {
    tree.addChild(5);
    tree.children[0].addChild(1);
    tree.children[0].addChild(2);
    tree.children[0].children[0].addChild(3);
    tree.children[0].children[0].removeFromParent();
    expect(tree.contains(1)).to.equal(false);
    expect(tree.children[0].children[1].value).to.equal(3);
    expect(tree.children[0].children[1].parent.value).to.equal(5);
    expect(tree.contains(2)).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should create link to parent when child is added', function() {
    tree.addChild(5);
    tree.children[0].addChild(1);
    tree.children[0].addChild(2);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should execute a callback on every value in the tree using "traverse"', function() {
    var array = [];
    var func = function(value){ array.push(value + 2); };
    tree.addChild(5);
    tree.children[0].addChild(1);
    tree.children[0].addChild(2);
    tree.children[0].children[0].addChild(3);
    tree.traverse(func);
    expect(array).to.eql([7,3,5,4]);
  });

});
