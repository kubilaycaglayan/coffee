import createSession from './createSession';
import autoFlash from './autoFlash';
import { login } from '../API';

const attemptLogin = creds => dispatch => {
  login(creds)
    .then(
      response => {
        if (response.loggedIn) {
          dispatch(createSession(response.user));
          dispatch(autoFlash('Login successful'));
        } else {
          dispatch(autoFlash('Login not successful'));
        }
      },
    );
};

export default attemptLogin;
