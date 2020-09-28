import getToken from '../helpers/getToken';
import { LOGOUT_URL } from '../../constants';

const logout = id => {
  const token = getToken();
  const endpoint = `${LOGOUT_URL}${id}`;

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

export default logout;
