import React, { useState } from 'react';

const LoginForm = props => {
  const { handleNewUser } = props;

  const [newUser, setNewUser] = useState({ email: '', password: '', passwordConfirmation: '' });

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
      passwordConfirmation: e.target.value,
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
          <input id="password" onChange={handlePasswordChange} />
        </label>
        <label htmlFor="passwordConfirmation">
          Password Confirmation:
          <input id="passwordConfirmation" onChange={handlePasswordConfirmationChange} />
        </label>
        <button type="button" onClick={() => { handleNewUser(newUser); }}>
          Create New User
        </button>
      </form>
    </>
  );
};

export default LoginForm;
