import { RECORD_COFFEES, DEFAULT_COFFEES } from '../../constants';

const session = (state = DEFAULT_COFFEES, action) => {
  switch (action.type) {
    case RECORD_COFFEES:
      return action.coffees;
    default:
      return state;
  }
};

export default session;
