
let arr = [1, 2, 3, 4];
let even = function(el) {
  return el % 2 === 0;
};

describe('Tests for "every" method', () => {
  test('checks if every element of an array satisfies the condition', () => {
    expect(arr.every(even))
      .toBe(false);
  });

  test('checks if array is not modified', () => {
    arr.every(even);
    expect(arr)
      .toEqual([1, 2, 3, 4]);
  });
});
