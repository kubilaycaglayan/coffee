import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { credentials } from '../../constants';

const LoginForm = props => {
  const { handleLogin } = props;

  const [creds, setCreds] = useState(credentials);

  const handleMailChange = e => {
    setCreds({
      ...creds,
      email: e.target.value,
    });
  };

  const handlePasswordChange = e => {
    setCreds({
      ...creds,
      password: e.target.value,
    });
  };

  return (
    <div className="sign-in-form">
      <form>
        <label htmlFor="email">
          <input id="email" onChange={handleMailChange} />
        </label>
        <label htmlFor="password">
          <input type="password" id="password" onChange={handlePasswordChange} />
        </label>
        <button type="button" onClick={() => { handleLogin(creds); }}>
          Sign In
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
