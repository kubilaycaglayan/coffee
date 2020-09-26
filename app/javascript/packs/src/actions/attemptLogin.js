import createSession from './createSession';
import { login } from '../API';

const attemptLogin = creds => {

  return dispatch => {
    login(creds)
      .then(
        response => {
          console.log(response);
          if (response.loggedIn) {
            console.log('login successful');
            dispatch(createSession(response.user.email));
          } else {
            console.log('login not successful');
          }
        },
      );
  };
};

export default attemptLogin;
