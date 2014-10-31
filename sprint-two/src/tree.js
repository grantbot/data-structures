var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  // var node = {value: value}; //The key "value" here will not get evaluated
  // as the passed-in argument; it gets stringified such that node.value works
  // and returns the passed-in argument --> value. If you wanted it to eval
  // to the passed-in val, you'd need to declare an empty object and then
  // use node[value] = whatever. Considered bad practice.
  // var node = {value: value}

  var node = makeTree(value);
  this.children.push(node);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else if (this.children.length !== 0) {
    return _.some(this.children, function(childNode) {
      return childNode.contains(target);
    });
  } else {
    // debugger;
    return false;
  }



// jon's note to himself (this didn't work)
  // if (this.value === target) {
  //   return true;
  // } else if (this.children.length !== 0) {
  //   for (var i = 0; i < this.children.length; i++) {
  //     return this.children[i].contains(target);
  //   }
  // } else {
  //   // debugger;
  //   return false;
  // }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
