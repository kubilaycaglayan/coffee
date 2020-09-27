import getToken from '../helpers/getToken';
import { CREATE_COFFEE_URL } from '../../constants';

const token = getToken();

const createCoffee = data => fetch(CREATE_COFFEE_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': token,
  },
  body: JSON.stringify(data),
})
  .then(
    response => response.json(),
  );

export default createCoffee;
