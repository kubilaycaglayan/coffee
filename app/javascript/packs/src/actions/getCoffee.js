import recordCoffee from './recordCoffee';
import { coffeeIndex } from '../API';

const getCoffee = () => {

  return dispatch => {
    coffeeIndex()
      .then(
        response => {
          dispatch(recordCoffees(response));
        },
      );
  };
};

export default getCoffee;
