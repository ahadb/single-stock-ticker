import { commaSeparatedNumbers } from './utils';

test('test commaSeparatedNumbers', () => {
  expect(commaSeparatedNumbers(12345)).toEqual("12,345");
  expect(commaSeparatedNumbers(1000000)).toEqual("1,000,000");
});

test('commaSeparatedNumbers throws', () => {
  expect(() => {
    commaSeparatedNumbers('some random string').toThrow();
  })
});


