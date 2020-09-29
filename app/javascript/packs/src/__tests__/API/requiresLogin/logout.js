import { logout } from '../../../API';

describe(
  'login',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await logout({}, 'http://localhost:3000');
      expect(response).toEqual('Server Error');
    });
  },
);
