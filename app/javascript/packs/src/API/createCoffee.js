import getToken from '../helpers/getToken';
import { CREATE_COFFEE_URL } from '../../constants';

const createCoffee = data => {
  const token = getToken();

  return fetch(CREATE_COFFEE_URL, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': token,
    },
    body: data,
  })
    .then(
      response => response.json(),
    );
};

export default createCoffee;
