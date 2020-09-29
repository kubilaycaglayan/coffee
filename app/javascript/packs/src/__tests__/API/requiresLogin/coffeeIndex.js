import { coffeeIndex } from '../../../API';
import { PROXY_TEST } from '../../../../constants';

describe(
  'coffeeIndex',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await coffeeIndex(1, PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
