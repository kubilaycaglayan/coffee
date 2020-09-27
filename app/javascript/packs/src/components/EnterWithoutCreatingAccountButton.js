import React from 'react';
import PropTypes from 'prop-types';

const EnterWithoutCreatingAccountButton = props => {
  const { handleLogin } = props;

  const creds = {
    email: 'a@a.com',
    password: '000000',
  };

  return (
    <button type="button" onClick={() => { handleLogin(creds); }}>
      Enter Without Account
      <span className="pl-2" role="img" aria-label="emergency entrance">
        ➡️
      </span>
    </button>
  );
};

EnterWithoutCreatingAccountButton.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default EnterWithoutCreatingAccountButton;
