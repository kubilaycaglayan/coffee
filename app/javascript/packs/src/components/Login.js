import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginRoutes from '../containers/LoginRoutes';

const Login = () => (
  <Router>
    <LoginRoutes />
  </Router>
);

export default Login;
