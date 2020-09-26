import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginForm from '../components/LogInForm';
import { attemptLogin } from '../actions';

const Login = props => {
  const { handleLogin } = props;

  return (
    <>
      <Route render={() => <LoginForm handleLogin={handleLogin} />} />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  handleLogin: creds => dispatch(attemptLogin(creds)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
