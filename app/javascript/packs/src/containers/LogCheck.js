import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../components/Login';
import App from '../components/App';
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

LogCheck.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
  message: state.flash,
});

export default connect(
  mapStateToProps,
  null,
)(LogCheck);
