function chop(int, array) {
  var l = 0;
  var r = array.length - 1;

  while (l <= r) {
    var m = Math.floor((l+r)/2);
    if (array[m] < int) {
      l = m + 1;
    }
    else if (array[m] > int) {
      r = m - 1;
    }
    else {
      return m;
    }
  }

  return -1;
}

module.exports = chop;
