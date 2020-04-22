import { foo } from './lib';

test('foo returns 42', () => {
  expect(foo()).toEqual(42);
});
