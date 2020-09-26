import { combineReducers } from 'redux';
import session from './session';
import coffees from './coffees';
import coffee from './coffee';

const reducer = combineReducers({
  session,
  coffees,
  coffee,
});

export default reducer;
