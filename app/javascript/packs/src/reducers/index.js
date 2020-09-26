import { combineReducers } from 'redux';
import session from './session';
import coffees from './coffees';
import coffee from './coffee';
import favorites from './favorites';

const reducer = combineReducers({
  session,
  coffees,
  coffee,
  favorites,
});

export default reducer;
