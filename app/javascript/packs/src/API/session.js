import { SESSION_URL } from '../../constants';

const session = () => {
  return fetch(SESSION_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(
      response => response.json(),
    );
};

export default session;
