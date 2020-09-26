import recordCoffees from './recordCoffees';
import { coffeesIndex } from '../API';

const getCoffees = () => {

  return dispatch => {
    coffeesIndex()
      .then(
        response => {
          dispatch(recordCoffees(response));
        },
      );
  };
};

export default getCoffees;
