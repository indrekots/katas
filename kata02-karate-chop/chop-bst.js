var bst = require('./lib/bst.js');

function search(int, node) {
  if (node == null) {
    return -1;
  }
  else if (node.value === int) {
    return node.index;
  }
  else if (int < node.value) {
    return search(int, node.left);
  }
  else {
    return search(int, node.right);
  }
}

function chop(int, array) {
  var root = bst.buildTree(array, 0);
  return search(int, root);
}

module.exports = chop;
