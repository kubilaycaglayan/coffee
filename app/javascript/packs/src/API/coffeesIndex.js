import getToken from '../helpers/getToken';
import { GET_COFFEES_URL } from '../../constants';

const coffeesIndex = () => {
  const token = getToken();
  return fetch(GET_COFFEES_URL, {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })
    .then(
      response => response.json(),
    );
};

export default coffeesIndex;
