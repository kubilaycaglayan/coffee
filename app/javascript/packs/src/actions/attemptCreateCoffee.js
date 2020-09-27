import { createCoffee } from '../API';
import getCoffees from './getCoffees';
import autoFlash from './autoFlash';

const attemptCreateCoffee = data => dispatch => {
  createCoffee(data)
    .then(
      response => {
        if (response.success) {
          dispatch(getCoffees());
        } else {
          dispatch(autoFlash('Something went wrong.'));
        }
      },
    );
};

export default attemptCreateCoffee;
