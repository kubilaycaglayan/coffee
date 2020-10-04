import fetch from 'node-fetch';
import getToken from '../helpers/getToken';
import { CREATE_FAVORITE_URL } from '../../constants';

const createFavorite = (data, proxy = '') => {
  const token = getToken();

  return fetch(`${proxy}${CREATE_FAVORITE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    body: JSON.stringify({ id: data }),
  })
    .then(
      response => response.json(),
    )
    .catch(
      () => 'Server Error',
    );
};

export default createFavorite;
