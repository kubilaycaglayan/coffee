import getToken from '../helpers/getToken';
import { DELETE_FAVORITE_URL } from '../../constants';

const createFavorite = id => {
  const token = getToken();
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
