import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducer from './reducers/index';
import App from './App';
// import { initialState } from '../../constants';

// const store = createStore(reducer, initialState, applyMiddleware(thunk));

const Provided = () => (
  <>
    <App />
  </>
);

export default Provided;
