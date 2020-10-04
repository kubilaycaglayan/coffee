import { PROXY_TEST } from '../../../../constants';
import { deleteFavorite } from '../../../API';

describe(
  'deleteFavorite',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await deleteFavorite({}, PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
