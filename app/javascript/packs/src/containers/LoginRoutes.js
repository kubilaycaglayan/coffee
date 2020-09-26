import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginForm from '../components/LogInForm';
import NewUserForm from '../components/NewUserForm';
import { attemptLogin } from '../actions';
import NewUserButton from '../components/NewUserButton';
import LoginButton from '../components/LoginButton';

const Login = props => {
  const { handleLogin } = props;

  return (
    <>
      <Route exact path="/" component={NewUserButton} />
      <Route exact path="/new-user" component={LoginButton} />
      <Route exact path="/" render={() => <LoginForm handleLogin={handleLogin} />} />
      <Route exact path="/new-user" component={NewUserForm} />
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
