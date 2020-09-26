import { createCoffee } from '../API';
import getCoffees from './getCoffees';

const attemptCreateCoffee = data => {

  return dispatch => {
    createCoffee(data)
      .then(
        response => {
          if (response.success) {
            dispatch(getCoffees());
          } else {
            console.log('coffee creation not successful');
          }
        },
      );
  };
};

export default attemptCreateCoffee;
