import { coffeesIndex } from '../../API';

describe(
  'coffeesIndex',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await coffeesIndex('http://localhost:3000');
      expect(response).toEqual('FetchError: invalid json response body at http://localhost:3000/api/coffees reason: Unexpected token Y in JSON at position 0');
    });
  },
);
