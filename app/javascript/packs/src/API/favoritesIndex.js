import fetch from 'node-fetch';
import getToken from '../helpers/getToken';
import { GET_FAVORITES_URL } from '../../constants';

const favoritesIndex = (proxy = '') => {
  const token = getToken();

  return fetch(`${proxy}${GET_FAVORITES_URL}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })
    .then(
      response => response.json(),
    )
    .catch(
      () => 'Server Error',
    );
};

export default favoritesIndex;
