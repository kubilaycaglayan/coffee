import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

const App = () => (
  <Router>
    <Route exact path="/">
      <LogoutButton handleClick={} />
    </Route>
  </Router>
);

export default App;
