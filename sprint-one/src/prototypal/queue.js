var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //What's the advantage of thi versus functional-sharing?
  var newQueue = Object.create(queueMethods);
  newQueue.count = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    var result = this.storage[0];
    delete this.storage[0];
    for (var i = 0; i < this.count - 1; i++) {
      this.storage[i] = this.storage[i+1];
    }
    this.count--;
    return result;
  }
};

queueMethods.size = function() {
  return this.count;
}
