

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.graph = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.edge = [];
  newNode.value = node;
  this.graph[node] = newNode;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  for (var i in this.graph) {
    if (this.graph[i].value === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.graph[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.graph[fromNode].edge.indexOf(toNode) !== -1) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.graph[fromNode].edge.push(toNode);
  this.graph[toNode].edge.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var context = this;
  var spliceEdge = function(node, other) {
    context.graph[node].edge.splice(context.graph[node].edge.indexOf(other), 1);
  };
  spliceEdge(fromNode, toNode);
  spliceEdge(toNode, fromNode);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var i in this.graph) {
    cb(this.graph[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



