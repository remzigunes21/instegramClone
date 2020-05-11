const sum = require('../src/test/sum');

test('1 +2  equals to 3 ', () => {
  expect(sum(1, 2)).toBe(3);
});
