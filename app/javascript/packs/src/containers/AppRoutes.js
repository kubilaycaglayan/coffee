import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { attemptLogout } from '../actions';
import LogoutButton from '../components/LogoutButton';
import Coffees from './Coffees';
import Favorites from './Favorites';
import Coffee from './Coffee';
import FavoritesButton from '../components/FavoritesButton';
import CoffeesButton from '../components/CoffeesButton';
import CoffeeForm from './CoffeeForm';
import CreateNewCoffeeButton from '../components/CreateNewCoffeeButton';

const Routes = props => {
  const { handleLogout, userId } = props;

  return (
    <>
      <Route path="/">
        <LogoutButton handleClick={() => { handleLogout(userId); }} />
      </Route>
      <Route path="/" component={FavoritesButton} />
      <Route path="/" component={CoffeesButton} />
      <Route path="/" component={CreateNewCoffeeButton} />
      <Route exact path="/" component={Coffees} />
      <Route exact path="/create-coffee" component={CoffeeForm} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/coffee/:coffeeId" component={Coffee} />
    </>
  );
};

Routes.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: userId => dispatch(attemptLogout(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
