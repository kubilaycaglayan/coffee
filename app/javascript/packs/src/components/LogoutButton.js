import React from 'react';
import { logout } from '../API';

const LogoutButton = () => {

  const handleClick = () => {
    logout();
  };

  return (
    <button type="button" onClick={handleClick}>
      Logout
    </button>
  );
};

export default LogoutButton;
