import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from '../components/LogInForm';
import NewUserForm from '../components/NewUserForm';
import { attemptLogin, attemptCreateUser } from '../actions';
import NewUserButton from '../components/NewUserButton';
import LoginButton from '../components/LoginButton';

const Login = props => {
  const { handleLogin, handleNewUser, loggedIn } = props;

  return (
    <>
      <Route path="/">
        {
          loggedIn ? '' : <Redirect to="/" />
        }
      </Route>
      <Route exact path="/" component={NewUserButton} />
      <Route exact path="/" render={() => <LoginForm handleLogin={handleLogin} />} />
      <Route exact path="/new-user" component={LoginButton} />
      <Route exact path="/new-user" render={() => <NewUserForm handleNewUser={handleNewUser} />} />
    </>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  handleLogin: creds => dispatch(attemptLogin(creds)),
  handleNewUser: user => dispatch(attemptCreateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
