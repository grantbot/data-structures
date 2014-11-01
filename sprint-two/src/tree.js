var makeTree = function(value){
  var newTree = {};

  newTree.value = value;
  newTree.parent = null; //Added as part of extra credit
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
  node.parent = this;

  this.children.push(node);
};

treeMethods.removeFromParent = function() {
  //For a given node, removes node from parents children array and sets node's parent to null
  var parent = this.parent;
  //Loop through parent's children array
  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === this) { //Note we can compare the objects, not their value property
      //Remove self from parent's children array
      parent.children.splice(i, 1);
      break; //So we only remove the first instance of a node with the given value
    }
  }
  //Set node's parent to null
  this.parent = null;

  //Return severed node so we can do stuff with it (like test for its existence)
  return this;

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
