import createSession from './createSession';
import { login } from '../API';

const attemptLogin = creds => {

  return dispatch => {
    login(creds)
      .then(
        response => {
          if (response.loggedIn) {
            dispatch(createSession(response.user));
          } else {
            console.log('login not successful');
          }
        },
      );
  };
};

export default attemptLogin;
