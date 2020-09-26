import React from 'react';

const LogoutButton = props => {
  const { handleClick } = props;

  return (
    <button type="button" onClick={handleClick}>
      Logout
    </button>
  );
};

export default LogoutButton;
