import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/LogInForm';
import NewUserForm from '../components/NewUserForm';
import { attemptLogin, attemptCreateUser } from '../actions';
import NewUserButton from '../components/NewUserButton';
import LoginButton from '../components/LoginButton';

const Login = props => {
  const { handleLogin, handleNewUser, loggedIn } = props;

  return (
    <div className="outside">
      <div className="title">
        <h1>
          Sign In
        </h1>
        <p>
          Hello there! Sign in and start choosing your favorite coffee beans!
        </p>
      </div>
      <Route path="/">
        {
          loggedIn ? '' : <Redirect to="/" />
        }
      </Route>
      <Route exact path="/" render={() => <LoginForm handleLogin={handleLogin} />} />
      <Route exact path="/new-user" render={() => <NewUserForm handleNewUser={handleNewUser} />} />
      <Route exact path="/" component={NewUserButton} />
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleNewUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
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
