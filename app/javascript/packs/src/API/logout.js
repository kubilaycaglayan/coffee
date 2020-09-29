import fetch from 'node-fetch';
import getToken from '../helpers/getToken';
import { LOGOUT_URL } from '../../constants';

const logout = (id, proxy = '') => {
  const token = getToken();
  const endpoint = `${proxy}${LOGOUT_URL}${id}`;

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

export default logout;
