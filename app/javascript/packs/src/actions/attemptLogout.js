import destroySession from './destroySession';
import { logout } from '../API';

const attemptLogout = creds => {

  return dispatch => {
    logout()
      .then(
        response => {
          console.log(response);
          if (!response.loggedIn) {
            console.log('logout successful');
            dispatch(destroySession());
          } else {
            console.log('logout not successful');
          }
        },
      );
  };
};

export default attemptLogout;
