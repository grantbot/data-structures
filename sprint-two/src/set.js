var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = '';
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (this._storage.indexOf(item) === -1) {
    this._storage += item;
  }
};

setPrototype.contains = function(item){
  if (this._storage.indexOf(item) !== -1) {
    return true;
  }
  else {
    return false;
  }
};

setPrototype.remove = function(item){
  if (this._storage.indexOf(item) !== -1) {
    var index = this._storage.indexOf(item);
    this._storage = this._storage.substring(0, index) + this._storage.substring(index + item.length);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
