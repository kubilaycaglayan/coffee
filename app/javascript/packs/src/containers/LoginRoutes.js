import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/LogInForm';
import NewUserForm from '../components/NewUserForm';
import { attemptLogin, attemptCreateUser, autoFlash } from '../actions';
import NewUserButton from '../components/NewUserButton';
import EnterWithoutCreatingAccountButton from '../components/EnterWithoutCreatingAccountButton';

const Login = props => {
  const {
    handleLogin, handleNewUser, fireFlash,
  } = props;

  return (
    <div className="outside">
      <section className="title">
        <h1>
          Sign In
        </h1>
        <p>
          Hello there! Sign in and start choosing your favorite coffee beans!
        </p>
      </section>
      <Route exact path="/" render={() => <LoginForm handleLogin={handleLogin} autoFlash={fireFlash} />} />
      <Route exact path="/new-user" render={() => <NewUserForm handleNewUser={handleNewUser} autoFlash={fireFlash} />} />
      <Route exact path="/" render={() => <EnterWithoutCreatingAccountButton handleLogin={handleLogin} />} />
      <Route exact path="/" component={NewUserButton} />
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleNewUser: PropTypes.func.isRequired,
  fireFlash: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  handleLogin: creds => dispatch(attemptLogin(creds)),
  handleNewUser: user => dispatch(attemptCreateUser(user)),
  fireFlash: message => dispatch(autoFlash(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
