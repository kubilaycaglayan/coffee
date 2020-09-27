import getToken from '../helpers/getToken';
import { CREATE_FAVORITE_URL } from '../../constants';

const token = getToken();

const createFavorite = data => fetch(CREATE_FAVORITE_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': token,
  },
  body: JSON.stringify({ id: data }),
})
  .then(
    response => response.json(),
  );

export default createFavorite;
