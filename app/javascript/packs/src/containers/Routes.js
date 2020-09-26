import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { attemptLogout } from '../actions';
import LogoutButton from '../components/LogoutButton';
import Coffees from './Coffees';
import Coffee from './Coffee';

const Routes = props => {
  const { handleLogout } = props;

  return (
    <>
      <Route exact path="/">
        <LogoutButton handleClick={handleLogout} />
      </Route>
      <Route path="/">
        <Coffees />
      </Route>
      <Route exact path="/coffee/:coffeeId" component={Coffee} />
    </>
  );
};

Routes.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(attemptLogout()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Routes);
