import { PROXY_TEST } from '../../../../constants';
import { favoritesIndex } from '../../../API';

describe(
  'deleteFavorite',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await favoritesIndex(PROXY_TEST);
      expect(response).toEqual('Server Error');
    });
  },
);
