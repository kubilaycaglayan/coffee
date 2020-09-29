import fetch from 'node-fetch';
import getToken from '../helpers/getToken';
import { GET_COFFEES_URL } from '../../constants';

const coffeesIndex = (proxy = '') => {
  const token = getToken();
  return fetch(`${proxy}${GET_COFFEES_URL}`, {
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

export default coffeesIndex;
