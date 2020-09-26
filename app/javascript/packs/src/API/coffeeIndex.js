import getToken from '../helpers/getToken';
import { GET_COFFEE_URL } from '../../constants';

const token = getToken();

const coffeeIndex = id => {
  const endpoint = `${GET_COFFEE_URL}${id}`;
  return fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })
    .then(
      response => response.json(),
    );
};

export default coffeeIndex;
