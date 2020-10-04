import React from 'react';
import { Link } from 'react-router-dom';

const LoginPageButton = () => (
  <div className="new-user">
    <Link to="/">
      <button type="button">
        Sign In Page
      </button>
    </Link>
  </div>
);

export default LoginPageButton;
