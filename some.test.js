const some = require('./some');

let arr = [1, 2, 3, 4];

let even = function(el) {
  return el % 2 === 0;
};

test('checks if some element satisfies the condition', () => {
  expect(arr.some(even)).toBe(true);
});
