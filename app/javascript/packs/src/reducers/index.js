import { combineReducers } from 'redux';
import session from './session';
import coffees from './coffees';
import coffee from './coffee';
import favorites from './favorites';
import newCoffee from './newCoffee';

const reducer = combineReducers({
  session,
  coffees,
  coffee,
  favorites,
  newCoffee,
});

export default reducer;
