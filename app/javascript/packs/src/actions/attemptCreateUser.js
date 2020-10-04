import { createUser } from '../API';
import attemptLogin from './attemptLogin';
import autoFlash from './autoFlash';

const attemptCreateUser = user => dispatch => {
  createUser(user)
    .then(
      response => {
        if (response.success) {
          dispatch(autoFlash('User created successfully.'));
          dispatch(attemptLogin({
            email: user.email,
            password: user.password,
          }));
        } else {
          dispatch(autoFlash(`Error: ${response.message}`.replace('undefined', 'Something went wrong.')));
        }
      },
    )
    .catch(
      err => {
        dispatch(autoFlash(`Something went wrong. ${err}`));
      },
    );
};

export default attemptCreateUser;
