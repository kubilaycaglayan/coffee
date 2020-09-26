import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import App from './App';

const LogCheck = props => {
  const { loggedIn } = props;

  return (
    <>
      {
        !loggedIn
          ? <App />
          : <Login />
      }
    </>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
});

export default connect(
  mapStateToProps,
  null,
)(LogCheck);
