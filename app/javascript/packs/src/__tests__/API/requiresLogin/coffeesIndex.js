import { coffeesIndex } from '../../../API';

describe(
  'coffeesIndex',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await coffeesIndex('http://localhost:3000');
      expect(response).toEqual('Server Error');
    });
  },
);
