import fetch from 'node-fetch';
import getToken from '../helpers/getToken';
import { LOGIN_URL } from '../../constants';

const login = (creds, proxy = '') => {
  const token = getToken();
  const data = JSON.stringify({
    user: creds,
  });

  return fetch(`${proxy}${LOGIN_URL}`, {
    method: 'POST',
    body: data,
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

export default login;
