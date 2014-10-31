var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // var tempObject = {k: v}; //Why doesn't this work?
  // It sets the key as k instead of "Steven" or whatever k points to
  var tempObject = {};
  tempObject[k] = v;

  if (this._storage.get(i) === undefined) {
    this._storage.set(i, [])
  }
  this._storage.get(i).push(tempObject);

};


HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var result;
  //Todo: refactor to use this._storage.each. Same with .remove
  for (var j = 0; j < this._storage.get(i).length; j++) {
    if (this._storage.get(i)[j].hasOwnProperty(k)) {
      result = this._storage.get(i)[j][k];
    }
  }
  return result;
  };

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(i)[0][k] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
