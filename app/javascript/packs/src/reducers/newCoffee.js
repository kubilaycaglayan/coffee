import { CHANGE_NEW_COFFEE, NEW_COFFEE } from '../../constants';

const newCoffee = (state = NEW_COFFEE, action) => {
  switch (action.type) {
    case CHANGE_NEW_COFFEE:
      return action.coffee;
    default:
      return state;
  }
};

export default newCoffee;
