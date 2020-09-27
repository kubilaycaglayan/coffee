import React from 'react';
import PropTypes from 'prop-types';

const LogoutButton = props => {
  const { handleClick } = props;

  return (
    <button className="menu-item" type="button" onClick={handleClick}>
      Logout
    </button>
  );
};

LogoutButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default LogoutButton;
