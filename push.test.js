const push = require('./push');

describe('Tests for "push" method', () => {
  test('add 9 to the end of [1, 2, 7] array and return the length of new array', () => {
    expect(push([1, 2, 7], 9))
      .toBe(4);
  });

  test('checks if array is modified', () => {
    const arr = [1, 2, 7];
    const a = 9;
    push(arr, a);
    expect(arr)
      .toEqual([1, 2, 7, 9]);
  });

  test('Should be falsy when passed arguments are not equal 2', () => {
    expect(push.length)
      .toBe(2);
  });

  test('Should be undefined when passed arguments are undefined', () => {
    push([undefined], undefined);
    expect(push.length[0])
      .toBeUndefined();
    expect(push.length[1])
      .toBeUndefined();
  });

  test('Should be falsy when passed arguments are null', () => {
    push([null, null], null);
    expect(push.length[0])
      .toBeFalsy();
    expect(push.length[1])
      .toBeFalsy();
  });
});
