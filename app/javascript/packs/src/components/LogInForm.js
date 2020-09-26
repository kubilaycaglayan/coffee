import React, { useState } from 'react';
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
    <>
      <form>
        <input onChange={handleMailChange} />
        <input onChange={handlePasswordChange} />
        <button type="button" onClick={ () => { handleLogin(creds); }}>
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
