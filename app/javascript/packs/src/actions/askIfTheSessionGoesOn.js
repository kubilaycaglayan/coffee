import { session } from '../API';
import createSession from './createSession';
import autoFlash from './autoFlash';
import destroySession from './destroySession';

const askIfTheSessionGoesOn = () => dispatch => {
  session()
    .then(
      response => {
        if (response.loggedIn) {
          dispatch(createSession(response.user));
          dispatch(autoFlash('Login successful'));
        } else {
          dispatch(destroySession());
        }
      },
    );
};

export default askIfTheSessionGoesOn;
