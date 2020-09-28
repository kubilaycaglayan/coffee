import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../components/Login';
import App from '../components/App';
import Flash from '../components/Flash';
import { askIfTheSessionGoesOn } from '../actions';

const LogCheck = props => {
  const { loggedIn, message, checkStatus } = props;

  useEffect(() => {
    checkStatus();
  }, []);

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
  checkStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
  message: state.flash,
});

const mapDispatchToProps = dispatch => ({
  checkStatus: () => { dispatch(askIfTheSessionGoesOn()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogCheck);
