import getToken from '../helpers/getToken';
import { GET_FAVORITES_URL } from '../../constants';

const favoritesIndex = () => {
  const token = getToken();

  return fetch(GET_FAVORITES_URL, {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })
    .then(
      response => response.json(),
    );
};

export default favoritesIndex;
