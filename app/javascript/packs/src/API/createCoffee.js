import getToken from '../helpers/getToken';
import { CREATE_COFFEE_URL } from '../../constants';

const token = getToken();

const createCoffee = data => fetch(CREATE_COFFEE_URL, {
  method: 'POST',
  headers: {
    'X-CSRF-Token': token,
  },
  body: data,
  // body: JSON.stringify({ coffee: data }),
})
  .then(
    response => response.json(),
  );

export default createCoffee;
