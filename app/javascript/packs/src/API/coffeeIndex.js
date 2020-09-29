import fetch from 'node-fetch';
import getToken from '../helpers/getToken';
import { GET_COFFEE_URL } from '../../constants';

const coffeeIndex = (id, proxy = '') => {
  const token = getToken();
  const endpoint = `${proxy}${GET_COFFEE_URL}${id}`;
  return fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })
    .then(
      response => response.json(),
    )
    .catch(
      err => err.toString(),
    );
};

export default coffeeIndex;
