describe("Chop implementation with loops", function() {
  var chopImplementations = [];
  chopImplementations.push({name: 'chop-loop', impl: require('../chop-loop')});
  chopImplementations.push({name: 'chop-recursion', impl: require('../chop-recursion')});
  chopImplementations.push({name: 'chop-recursion2', impl: require('../chop-recursion2')});
  chopImplementations.push({name: 'chop-bst', impl: require('../chop-bst')});
  chopImplementations.push({name: 'chop-bst-loop', impl: require('../chop-bst')});

  for (var chop of chopImplementations) {
    (function(chop) {
      it("should be able to do binary search with " + chop.name, function() {
          expect(chop.impl(3, [])).toBe(-1);
          expect(chop.impl(3, [1])).toBe(-1);
          expect(chop.impl(1, [1])).toBe(0);

          expect(chop.impl(1, [1, 3, 5])).toBe(0);
          expect(chop.impl(3, [1, 3, 5])).toBe(1);
          expect(chop.impl(5, [1, 3, 5])).toBe(2);
          expect(chop.impl(0, [1, 3, 5])).toBe(-1);
          expect(chop.impl(2, [1, 3, 5])).toBe(-1);
          expect(chop.impl(4, [1, 3, 5])).toBe(-1);
          expect(chop.impl(6, [1, 3, 5])).toBe(-1);

          expect(chop.impl(1, [1, 3, 5, 7])).toBe(0);
          expect(chop.impl(3, [1, 3, 5, 7])).toBe(1);
          expect(chop.impl(5, [1, 3, 5, 7])).toBe(2);
          expect(chop.impl(7, [1, 3, 5, 7])).toBe(3);
          expect(chop.impl(0, [1, 3, 5, 7])).toBe(-1);
          expect(chop.impl(2, [1, 3, 5, 7])).toBe(-1);
          expect(chop.impl(4, [1, 3, 5, 7])).toBe(-1);
          expect(chop.impl(6, [1, 3, 5, 7])).toBe(-1);
          expect(chop.impl(8, [1, 3, 5, 7])).toBe(-1);
      });
    })(chop);
  }
});

/*describe("Chop implementation with recursion", function() {
  var chop = require('../chop-recursion');
  it("should be able to do binary search", testSuite(chop));
});*/
