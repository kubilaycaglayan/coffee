import getToken from '../helpers/getToken';
import { LOGIN_URL } from '../../constants';

const token = getToken();

const login = creds => {
  const data = JSON.stringify({
    user: creds,
  });

  return fetch(LOGIN_URL, {
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
    .then(
      response => {
        console.log(response);
        if (true) {
          console.log('');
        } else {
          console.log('');
        }
      },
    );
}

export default login;
