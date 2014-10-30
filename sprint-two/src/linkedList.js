var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (list.head == null) {
      list.tail = node;
      list.head = list.tail;
    } else {
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
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
