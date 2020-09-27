import recordCoffees from './recordCoffees';
import { coffeesIndex } from '../API';

const getCoffees = () => dispatch => {
  coffeesIndex()
    .then(
      response => {
        dispatch(recordCoffees(response));
      },
    );
};

export default getCoffees;
