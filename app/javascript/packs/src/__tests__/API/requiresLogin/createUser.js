import { PROXY_TEST } from '../../../../constants';
import { createUser } from '../../../API';

describe(
  'createUser',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await createUser({}, PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
