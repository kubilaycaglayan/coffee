import { RECORD_COFFEE, DEFAULT_COFFEE } from '../../constants';

const coffee = (state = DEFAULT_COFFEE, action) => {
  switch (action.type) {
    case RECORD_COFFEE:
      return action.coffee;
    default:
      return state;
  }
};

export default coffee;
