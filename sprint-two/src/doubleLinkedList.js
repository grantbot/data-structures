var makeDoubleLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

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

    return recurse(list.head);
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;

  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
