import { createUser } from '../API';
// import flash from './flash';

const attemptCreateUser = user => {

  return dispatch => {
    createUser(user)
      .then(
        response => {
          if (response.success) {
            console.log('success');
            // dispatch(flash('User created successfully'));
          } else {
            console.log('nopeee');
            // dispatch(flash('User not created successfully'));
          }
        },
      );
  };
};

export default attemptCreateUser;
