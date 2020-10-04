import { CHANGE_STATUS, DEFAULT_STATUS } from '../../constants';

const status = (state = DEFAULT_STATUS, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default status;
