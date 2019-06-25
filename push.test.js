const push = require('./push');

test('adds 9 to the end of [1, 2, 7] array and return the length of new array', () => {
  expect(push([1, 2, 7], 9)).toBe(4);
});
