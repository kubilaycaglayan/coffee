import { combineReducers } from 'redux';
import session from './session';
import coffees from './coffees';

const reducer = combineReducers({
  session,
  coffees,
});

export default reducer;
