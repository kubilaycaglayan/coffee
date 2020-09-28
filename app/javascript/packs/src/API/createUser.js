import getToken from '../helpers/getToken';
import { CREATE_USER_URL } from '../../constants';

const createUser = user => {
  const token = getToken();

  return fetch(CREATE_USER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    body: JSON.stringify({ user }),
  })
    .then(
      response => response.json(),
    );
};

export default createUser;
