const join = require('./join');

let arr = ['All', 'the', 'js', 'methods'];
let cond = '';

test('joins every element of an array on condition', () => {
  expect(arr.join(cond)).toBe('Allthejsmethods');
});
