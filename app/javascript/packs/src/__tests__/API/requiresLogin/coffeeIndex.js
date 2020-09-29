import { coffeeIndex } from '../../../API';

describe(
  'coffeeIndex',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await coffeeIndex(1, 'http://localhost:3000');
      expect(response).toEqual('Server Error');
    });
  },
);
