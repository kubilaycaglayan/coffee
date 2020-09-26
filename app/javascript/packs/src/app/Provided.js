import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import App from './App';
import { INITIAL_STATE } from '../../constants';

const store = createStore(reducer, INITIAL_STATE, applyMiddleware(thunk));

const Provided = () => (
  <>
    <App />
  </>
);

export default Provided;
