import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

import LogCheck from './LogCheck';
import { INITIAL_STATE } from '../../constants';

const store = createStore(reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(thunk)));

const Provided = () => (
  <Provider store={store}>
    <LogCheck />
  </Provider>
);

export default Provided;
