import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import App from './App';
import { INITIAL_STATE } from '../../constants';

const store = createStore(reducer, INITIAL_STATE, applyMiddleware(thunk));

const Provided = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Provided;
