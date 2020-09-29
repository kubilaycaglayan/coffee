import fetch from 'node-fetch';
import getToken from '../helpers/getToken';
import { CREATE_COFFEE_URL } from '../../constants';

const createCoffee = (data, proxy = '') => {
  const token = getToken();

  return fetch(`${proxy}${CREATE_COFFEE_URL}`, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': token,
    },
    body: data,
  })
    .then(
      response => response.json(),
    )
    .catch(
      () => 'Server Error',
    );
};

export default createCoffee;
