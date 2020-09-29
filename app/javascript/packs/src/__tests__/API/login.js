import { login } from '../../API';

describe(
  'login',
  () => {
    test('returns error message if no CSRF included in the header', async () => {
      const response = await login({}, 'http://localhost:3000');
      expect(response).toEqual('Server Error');
    });
  },
);
