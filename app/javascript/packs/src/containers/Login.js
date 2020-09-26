import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginRoutes from './LoginRoutes';

const Login = () => (
  <Router>
    <LoginRoutes />
  </Router>
);

export default Login;
