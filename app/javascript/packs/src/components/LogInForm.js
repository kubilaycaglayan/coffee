import React, { useState } from 'react';
import { credentials } from '../../constants';
import LogoutButton from './LogoutButton';

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

  const handleClick = () => {
    console.log('in form, in handle click');
    handleLogin(creds);
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
      <LogoutButton />
    </>
  );
};

export default LoginForm;
