import recordCoffees from './recordCoffees';
import { coffeesIndex } from '../API';
import { LOADING, READY } from '../../constants';
import changeStatus from './changeStatus';

const getCoffees = () => dispatch => {
  dispatch(changeStatus(LOADING));
  coffeesIndex()
    .then(
      response => {
        dispatch(recordCoffees(response));
        dispatch(changeStatus(READY));
      },
    );
};

export default getCoffees;
