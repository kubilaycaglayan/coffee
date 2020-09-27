import { createUser } from '../API';
import autoFlash from './autoFlash';

const attemptCreateUser = user => dispatch => {
  if (user.email === '') {
    dispatch(autoFlash('Email can\'t be blank'));
    return;
  }
  if (user.password === '') {
    dispatch(autoFlash('Password can\'t be blank'));
    return;
  }
  if (user.password !== user.password_confirmation) {
    dispatch(autoFlash('Passwords should match'));
    return;
  }
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
