import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
