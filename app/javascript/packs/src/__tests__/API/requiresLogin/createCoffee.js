import { createCoffee } from '../../../API';

describe(
  'createCoffee',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await createCoffee({}, 'http://localhost:3000');
      expect(response).toEqual('Server Error');
    });
  },
);
