import { RECORD_FAVORITES, DEFAULT_FAVORITES } from '../../constants';

const favorites = (state = DEFAULT_FAVORITES, action) => {
  switch (action.type) {
    case RECORD_FAVORITES:
      return action.coffees;
    default:
      return state;
  }
};

export default favorites;
