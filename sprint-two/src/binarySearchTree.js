//

var makeBinarySearchTree = function(value){
  var tree = Object.create(makeBinarySearchTree.prototype);
  tree.value = value;
  tree.left = false;
  tree.right = false;

  return tree;
};

makeBinarySearchTree.prototype.insert = function(value) {
  //If current node is same as inserted, stop
  if (this.value === value) {
    return; //Maybe not necessary? Would other block be entered without it?
  }
  //Otherwise, compare values
  else if (value < this.value) {
    if (!this.left) { //If doesn't exist, make node
      this.left = makeBinarySearchTree(value);
    } else { //If does exist, search down branch
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = makeBinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }


};

makeBinarySearchTree.prototype.contains = function(value) {
  //If current node is our target, return true
  if (this.value === value) {
    return true;
    //If we should go left and left node exists, search down it
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
    //Otherwise, if we should go right, then go there
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  } else {
    //Didn't find it, return false
    return false;
  }


};

makeBinarySearchTree.prototype.depthFirstLog = function(callback) {
  //Recursively visits every node in tree
  //Perform function on current node
  callback(this.value);
  //If it has a left node, recursively go down it
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  //Regardless, if it has a right node, recursively go down there too
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

