import recordCoffees from './recordCoffees';
import { coffeeIndex } from '../API';

const getCoffees = () => {

  return dispatch => {
    coffeeIndex()
      .then(
        response => {
          dispatch(recordCoffees(response));
        },
      );
  };
};

export default getCoffees;
