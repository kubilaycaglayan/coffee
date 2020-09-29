import { coffeeIndex } from '../../API';

describe(
  'coffeeIndex',
  () => {
    test('returns error message if not logged in', async () => {
      const response = await coffeeIndex(1, 'http://localhost:3000');
      expect(response).toEqual('FetchError: invalid json response body at http://localhost:3000/api/coffees/1 reason: Unexpected token Y in JSON at position 0');
    });
  },
);
