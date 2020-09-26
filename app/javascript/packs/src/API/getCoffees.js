import getToken from '../helpers/getToken';
import { GET_COFFEES_URL } from '../../constants';

const token = getToken();

const getCoffees = () => {

  return fetch(GET_COFFEES_URL, {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
  })
    .then(
      response => response.json(),
    )
    .then(
      res => {
        console.log(res);
      },
    );
};

getCoffees();

export default getCoffees;
