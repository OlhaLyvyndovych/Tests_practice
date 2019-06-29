const sum = require('./sum');

describe('Tests for "sum" function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2))
      .toBe(3);
  });

  test('checks if arguments are numbers and converts them to numbers if they are not', () => {
    expect(sum("1", "2"))
      .toBe(3);
  });
});
