import { coffeesIndex } from '../../../API';
import { PROXY_TEST } from '../../../../constants';

describe(
  'coffeesIndex',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await coffeesIndex(PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
