import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../containers/Login';

const App = () => (
  <Router>
    <Route exact path="/" component={Login} />
  </Router>
);

export default App;
