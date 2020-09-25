import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LogInForm';
import { login } from '../API';

const Login = props => {
  // const { handleLogin } = props;

  const handleLogin = creds => {
    login(creds);
  };

  return (
    <LoginForm handleLogin={handleLogin} />
  );
};

/* const mapDispatchToProps = dispatch => ({
  handleLogin: creds => dispatch(attemptLogin(creds)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
 */

export default Login;
