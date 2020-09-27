import recordCoffee from './recordCoffee';
import { coffeeIndex } from '../API';

const getCoffee = id => dispatch => {
  coffeeIndex(id)
    .then(
      response => {
        dispatch(recordCoffee(response));
      },
    );
};

export default getCoffee;
