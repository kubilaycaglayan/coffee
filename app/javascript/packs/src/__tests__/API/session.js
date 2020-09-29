import { session } from '../../API';

describe(
  'session',
  () => {
    test('returns error message if no CSRF included in the header', async () => {
      const response = await session({}, 'http://localhost:3000');
      expect(response).toEqual('Server Error');
    });
  },
);
