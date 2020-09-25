import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from '../components/LogIn';

const App = () => (
  <Router>
    <Route exact path="/" component={LogIn} />
  </Router>
);

export default App;
