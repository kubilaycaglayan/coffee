import getToken from '../helpers/getToken';
import { LOGOUT_URL } from '../../constants';

const token = getToken();

const logout = () => fetch(LOGOUT_URL, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': token,
  },
})
  .then(
    response => response.json(),
  );

export default logout;
