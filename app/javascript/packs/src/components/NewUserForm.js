import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginPageButton from './LoginPageButton';

const LoginForm = props => {
  const { handleNewUser } = props;

  const [newUser, setNewUser] = useState({ email: '', password: '', password_confirmation: '' });

  const handleMailChange = e => {
    setNewUser({
      ...newUser,
      email: e.target.value,
    });
  };

  const handlePasswordChange = e => {
    setNewUser({
      ...newUser,
      password: e.target.value,
    });
  };

  const handlePasswordConfirmationChange = e => {
    setNewUser({
      ...newUser,
      password_confirmation: e.target.value,
    });
  };

  return (
    <>
      <form>
        <h2 className="mb-3">
          Create New User
        </h2>
        <label htmlFor="email">
          <input placeholder="Email" id="email" onChange={handleMailChange} />
        </label>
        <label htmlFor="password">
          <input placeholder="Password" type="password" id="password" onChange={handlePasswordChange} />
        </label>
        <label htmlFor="passwordConfirmation">
          <input placeholder="Password Confirmation" type="password" id="passwordConfirmation" onChange={handlePasswordConfirmationChange} />
        </label>
        <button type="button" onClick={() => { handleNewUser(newUser); }}>
          Create New User
        </button>
      </form>
      <LoginPageButton />
    </>
  );
};

LoginForm.propTypes = {
  handleNewUser: PropTypes.func.isRequired,
};

export default LoginForm;
