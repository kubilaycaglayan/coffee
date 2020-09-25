import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const Login = props => {
  const { handleLogin } = props;

  return (
    <LogInForm handleLogin={handleLogin} />
  );
};

const mapDispatchToProps = dispatch => ({
  handleLogin: creds => dispatch(attemptLogin(creds));
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
