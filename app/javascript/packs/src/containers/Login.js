import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LogInForm';
import { attemptLogin } from '../actions';

const Login = props => {
  const { handleLogin } = props;

  return (
    <LoginForm handleLogin={handleLogin} />
  );
};

const mapDispatchToProps = dispatch => ({
  handleLogin: creds => dispatch(attemptLogin(creds)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
