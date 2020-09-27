import destroySession from './destroySession';
import autoFlash from './autoFlash';
import { logout } from '../API';

const attemptLogout = userId => dispatch => {
  logout(userId)
    .then(
      response => {
        if (!response.loggedIn) {
          dispatch(destroySession());
          dispatch(autoFlash('Logout successful'));
          window.location.reload();
        } else {
          dispatch(autoFlash('Something went wrong'));
        }
      },
    );
};

export default attemptLogout;
