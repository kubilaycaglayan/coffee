import { PROXY_TEST } from '../../../constants';
import { login } from '../../API';

describe(
  'login',
  () => {
    test('returns error message if no CSRF included in the header', async () => {
      const response = await login({}, PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
