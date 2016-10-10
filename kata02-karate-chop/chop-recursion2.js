function chop(int, array) {
  if (array.length == 0) return -1;

  var m = Math.floor((array.length -1)/2);
  if (array[m] == int) {
    return m;
  }
  else if (array[m] < int) {
    var result = chop(int, array.slice(m + 1));
    return result == -1 ? -1 : 1 + m + result;
  }
  else {
    return chop(int, array.slice(0, m));
  }
}

module.exports = chop;
