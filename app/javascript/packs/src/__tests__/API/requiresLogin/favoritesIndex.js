import { favoritesIndex } from '../../../API';

describe(
  'deleteFavorite',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await favoritesIndex('http://localhost:3000');
      expect(response).toEqual('Server Error');
    });
  },
);
