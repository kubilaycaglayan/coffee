import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import App from './App';
import Flash from '../components/Flash';

const LogCheck = props => {
  const { loggedIn, message } = props;

  return (
    <>
      <Flash message={message} />
      {
        loggedIn
          ? <App />
          : <Login />
      }
    </>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
  message: state.flash,
});

export default connect(
  mapStateToProps,
  null,
)(LogCheck);
