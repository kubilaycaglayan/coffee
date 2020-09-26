import { CREATE_SESSION, DESTROY_SESSION, DEFAULT_SESSION } from '../../constants';

const session = (state = DEFAULT_SESSION, action) => {
  switch (action.type) {
    case CREATE_SESSION:
      return {
        loggedIn: true,
        email: action.email,
      };
    case DESTROY_SESSION:
      return {
        loggedIn: false,
        email: '',
      };
    default:
      return state;
  }
};

export default session;
