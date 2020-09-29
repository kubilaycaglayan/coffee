import { createUser } from '../../../API';

describe(
  'createUser',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await createUser({}, 'http://localhost:3000');
      expect(response).toEqual('Server Error');
    });
  },
);
