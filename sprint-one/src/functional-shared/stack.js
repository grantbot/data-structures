var makeStack = function() {
  var newStack = {};
  newStack.count = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);

  return newStack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var result = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return result;
  }
};

stackMethods.size = function() {
  return this.count;
};
