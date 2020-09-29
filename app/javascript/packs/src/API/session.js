import fetch from 'node-fetch';
import { SESSION_URL } from '../../constants';

const session = (proxy = '') => fetch(`${proxy}${SESSION_URL}`, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(
    response => response.json(),
  )
  .catch(
    () => 'Server Error',
  );

export default session;
