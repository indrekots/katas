var bst = require('./lib/bst.js');

function search(int, node) {
  while(node != null) {
    if (int === node.value) {
      return node.index;
    }
    else if (int > node.value) {
      node = node.right;
    }
    else {
      node = node.left;
    }
  }

  return -1;
}

function chop(int, array) {
  var root = bst.buildTree(array, 0);
  return search(int, root);
}

module.exports = chop;
