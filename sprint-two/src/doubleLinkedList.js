var makeDoubleLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  var makeNode = function(value){
  var node = {};

  node.value = value;

  node.previous = null;
  node.next = null;
  return node;
};

  list.addToHead = function(value) {
    var node = makeNode(value);
    if (list.head == null) {
      list.tail = node;
      list.head = list.tail;
    } else {
      node.next = list.head;
      list.head.previous = node;
      list.head = node;
    }
  };

  list.addToTail = function(value){
    var node = makeNode(value);
    if (list.head == null) {
      list.tail = node;
      list.head = list.tail;
    } else {
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    delete list.head;
    list.head = temp.next;
    return temp.value;
  };

  list.removeTail = function(){ //Extra credit
    //Set temp to old tail
    var temp = list.tail;
    //Delete old tail
    list.tail = null;
    //Reassign new tail to old tail's previous
    if (temp.previous) {
      list.tail = temp.previous;
      list.tail.next = null;
    } else {
      list.head = null;
    }
    // if (list.tail !== null){
      // list.tail.next = null;
    // } else {
    //   list.head = null;
    // }
    // console.log(list.head)
    //Return old tail's value
    return temp.value;
  };

  list.contains = function(target){
    var recurse = function(node) {
      if (node.value == target){
        return true;
      } else if (node.next == null) {
        return false;
      } else {
        return recurse(node.next);
      }
    };
    if (list.head !== null) {
      return recurse(list.head);
    } else {
      return false;
    }
  };

  return list;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
