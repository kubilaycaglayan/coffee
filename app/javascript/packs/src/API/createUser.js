import fetch from 'node-fetch';
import getToken from '../helpers/getToken';
import { CREATE_USER_URL } from '../../constants';

const createUser = (user, proxy = '') => {
  const token = getToken();

  return fetch(`${proxy}${CREATE_USER_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    body: JSON.stringify({ user }),
  })
    .then(
      response => response.json(),
    )
    .catch(
      () => 'Server Error',
    );
};

export default createUser;
