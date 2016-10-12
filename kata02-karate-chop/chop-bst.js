function Node(value, index, left, right) {
  this.value = value;
  this.index = index;
  this.left = left;
  this.right = right;
}

function buildTree(array, index) {
  if (array.length === 0) return null;
  var mid = Math.floor((array.length - 1) / 2);

  var leftTree = buildTree(array.slice(0, mid), index);
  var rightTree = buildTree(array.slice(mid + 1), index + mid + 1);

  return new Node(array[mid], index + mid, leftTree, rightTree);
}

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
  var root = buildTree(array, 0);
  return search(int, root);
}

module.exports = chop;
