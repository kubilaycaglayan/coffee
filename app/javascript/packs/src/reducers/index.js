import { combineReducers } from 'redux';
import session from './session';
import coffees from './coffees';
import coffee from './coffee';
import favorites from './favorites';
import newCoffee from './newCoffee';
import flash from './flash';
import status from './status';

const reducer = combineReducers({
  session,
  coffees,
  coffee,
  favorites,
  newCoffee,
  status,
  flash,
});

export default reducer;
