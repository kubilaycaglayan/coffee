import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
        <label htmlFor="email">
          Email:
          <input id="email" onChange={handleMailChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" onChange={handlePasswordChange} />
        </label>
        <label htmlFor="passwordConfirmation">
          Password Confirmation:
          <input type="password" id="passwordConfirmation" onChange={handlePasswordConfirmationChange} />
        </label>
        <button type="button" onClick={() => { handleNewUser(newUser); }}>
          Create New User
        </button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  handleNewUser: PropTypes.func.isRequired,
};

export default LoginForm;
