const every = require('./every');

let arr = [1, 2, 3, 4];

let even = function(el) {
  return el % 2 === 0;
};

test('checks if every element of an array satisfies the condition', () => {
  expect(arr.every(even)).toBe(false);
});
