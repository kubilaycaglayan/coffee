import { PROXY_TEST } from '../../../../constants';
import { logout } from '../../../API';

describe(
  'login',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await logout({}, PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
