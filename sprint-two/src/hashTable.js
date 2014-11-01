var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //The table extending logic would go in here. With each insert we update the size of the table,
  //and if it's over 75% of the limit we extend. Which entails making a new, larger table, looping
  //through the old keys and rehashing and inserting them into the new table as you go. Then delete
  //the old table. Used .each in the helper functions in conjunction with bind.

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
