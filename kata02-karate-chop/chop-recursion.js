function chop(int, array) {
  var innerChop = function(left, right) {
    if (left > right) return -1;
    var m = Math.floor((left + right)/2);

    if (array[m] < int) {
      return innerChop(m + 1, right);
    }
    else if (array[m] > int) {
      return innerChop(left, m - 1);
    }
    else {
      return m;
    }
  }
  return innerChop(0, array.length - 1);
}

module.exports = chop;
