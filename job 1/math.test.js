const addition = require('./math');

test('addition de 2 + 3 = 5', () => {
  expect(addition(2, 3)).toBe(5);
});
