import { PROXY_TEST } from '../../../constants';
import { session } from '../../API';

describe(
  'session',
  () => {
    test('returns error message if no CSRF included in the header', async () => {
      const response = await session({}, PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
