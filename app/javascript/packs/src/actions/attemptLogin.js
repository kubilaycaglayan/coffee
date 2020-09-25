import { ATTEMPT, LOADING, LOGIN_URL } from '../../constants';
// import loading from './loading';

const attemptLogin = creds => {
  const data = JSON.stringify({
    user: creds,
  });

  return dispatch => {
    // dispatch(loading);
    fetch(LOGIN_URL, {
      body: data,
    })
      .then(
        response => {
          console.log(response);
          if (true) {
            console.log('');
          } else {
            console.log('');
          }
        },
      );
  };
};

export default attemptLogin;
