import createSession from './createSession';
import autoFlash from './autoFlash';
import { login } from '../API';

const attemptLogin = creds => {

  return dispatch => {
    login(creds)
      .then(
        response => {
          if (response.loggedIn) {
            dispatch(createSession(response.user));
            dispatch(autoFlash('Login successful...'));
          } else {
            console.log('login not successful');
          }
        },
      );
  };
};

export default attemptLogin;
