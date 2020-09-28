import { createUser } from '../API';
import autoFlash from './autoFlash';

const attemptCreateUser = user => dispatch => {
  createUser(user)
    .then(
      response => {
        if (response.success) {
          dispatch(autoFlash('User created successfully.'));
        } else {
          dispatch(autoFlash('Something went wrong.'));
        }
      },
    );
};

export default attemptCreateUser;
