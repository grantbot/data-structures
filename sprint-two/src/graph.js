var Graph = function(){
  this._storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  // var pushNode = function(newNode) {
  //   var node = {value: newNode};
  //   this._storage[newNode] = node;
  // };
  //If there's exactly 1 node in graph
  if (Object.keys(this._storage).length === 1){
    //Record first node
    var firstNode = Object.keys(this._storage)[0];

    //Push the new node
    var node = {value: newNode};
    this._storage[newNode] = node;

    //Add edge between first node and new node
    this.addEdge(newNode, firstNode);

    //Else, if toNode is specified, push newnode and make connection
  } else if (toNode !== undefined) {
    var node = {value: newNode};
    this._storage[newNode] = node;

    this.addEdge(newNode, toNode)

  //Otherwise just push the node, without making edge
  }else {
    var node = {value: newNode};
    this._storage[newNode] = node;
  }

};

Graph.prototype.contains = function(node){
  return this._storage.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this._storage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return !!this._storage[fromNode][toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._storage[fromNode][toNode] = true;
  this._storage[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //Remove connections from both nodes
  delete this._storage[fromNode][toNode];
  delete this._storage[toNode][fromNode];

  //Check both nodes for remaining connections; if none, delete both
  if (Object.keys(this._storage[fromNode]).length === 1) {
    delete this._storage[fromNode];
  }
  if (Object.keys(this._storage[toNode]).length === 1) {
    delete this._storage[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
