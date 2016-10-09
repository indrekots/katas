function chop(int, array) {
  if (array.length == 0) {
    return -1;
  }

  var m = Math.floor((array.length -1)/2);

  if (array[m] < int) {
    return chop(int, array.slice(m + 1));
  }
  else if (array[m] > int) {
    return chop(int, array.slice(0, m));
  }
  else {
    return m;
  }
}

module.exports = chop;
