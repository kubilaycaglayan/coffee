import destroySession from './destroySession';
import { logout } from '../API';

const attemptLogout = userId => {

  return dispatch => {
    logout(userId)
      .then(
        response => {
          console.log(response);
          if (!response.loggedIn) {
            console.log('logout successful');
            dispatch(destroySession());
            window.location.reload();
          } else {
            console.log('logout not successful');
          }
        },
      );
  };
};

export default attemptLogout;
