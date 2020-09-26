import getToken from '../helpers/getToken';
import { DELETE_FAVORITE_URL } from '../../constants';

const token = getToken();

const createFavorite = id => {
  const endpoint = `${DELETE_FAVORITE_URL}${id}`;

  return fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })
    .then(
      response => response.json(),
    );
};

export default createFavorite;
