import getToken from '../helpers/getToken';
import { GET_FAVORITES_URL } from '../../constants';

const token = getToken();

const favoritesIndex = () => fetch(GET_FAVORITES_URL, {
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': token,
  },
})
  .then(
    response => response.json(),
  );

export default favoritesIndex;
