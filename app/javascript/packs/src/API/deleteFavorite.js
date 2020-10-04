import fetch from 'node-fetch';
import getToken from '../helpers/getToken';
import { DELETE_FAVORITE_URL } from '../../constants';

const createFavorite = (id, proxy = '') => {
  const token = getToken();
  const endpoint = `${proxy}${DELETE_FAVORITE_URL}${id}`;

  return fetch(endpoint, {
    method: 'DELETE',
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

export default createFavorite;
