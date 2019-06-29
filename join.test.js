
describe('Test for "join" method', () => {
  test('joins every element of an array on condition', () => {
    let arr = ['All', 'the', 'js', 'methods'];
    let cond = '';
    expect(arr.join(cond))
      .toBe('Allthejsmethods');
  });
});
