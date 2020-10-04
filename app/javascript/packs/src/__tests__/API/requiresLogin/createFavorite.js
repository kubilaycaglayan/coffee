import { PROXY_TEST } from '../../../../constants';
import { createFavorite } from '../../../API';

describe(
  'createFavorite',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await createFavorite({}, PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
