import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = props => {
  const { handleLogin, autoFlash } = props;

  const [creds, setCreds] = useState({
    email: '',
    password: '',
  });

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

  const handleClick = () => {
    if (creds.email === '') {
      autoFlash('Email can\'t be blank');
      return;
    }
    if (creds.password === '') {
      autoFlash('Password can\'t be blank');
      return;
    }
    handleLogin(creds);
  };

  return (
    <section className="sign-in-form">
      <form>
        <label htmlFor="email">
          <input placeholder="Email: 'tse@best.com'" id="email" onChange={handleMailChange} spellCheck="false" />
        </label>
        <label htmlFor="password">
          <input placeholder="Password: 'microverse'" type="password" id="password" onChange={handlePasswordChange} />
        </label>
        <button type="button" onClick={() => { handleClick(creds); }}>
          Sign In
        </button>
      </form>
    </section>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  autoFlash: PropTypes.func.isRequired,
};

export default LoginForm;
