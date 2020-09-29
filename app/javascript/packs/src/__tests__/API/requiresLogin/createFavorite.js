import { createFavorite } from '../../../API';

describe(
  'createFavorite',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await createFavorite({}, 'http://localhost:3000');
      expect(response).toEqual('Server Error');
    });
  },
);
