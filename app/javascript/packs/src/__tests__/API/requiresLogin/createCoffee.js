import { PROXY_TEST } from '../../../../constants';
import { createCoffee } from '../../../API';

describe(
  'createCoffee',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await createCoffee({}, PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
