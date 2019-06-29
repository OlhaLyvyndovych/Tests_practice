
let arr = [1, 2, 3, 4];
let even = function(el) {
  return el % 2 === 0;
};

describe('Tests for "some" method', () => {
  test('checks if some element satisfies the condition', () => {
    expect(arr.some(even)).
      toBe(true);
  });

  test('checks if array is not modified', () => {
    arr.some(even);
    expect(arr).
      toEqual([1, 2, 3, 4]);
  });
});
