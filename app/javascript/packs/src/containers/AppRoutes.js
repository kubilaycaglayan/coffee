import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { push as Menu } from 'react-burger-menu'
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
  const { handleLogout, userId, email } = props;

  return (
    <div className="inside">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <div className="menu-item user-info">
          <div className="user-image">
            <img src="http://lofrev.net/wp-content/photos/2017/03/user_blue_logo.png" alt="representational user" />
          </div>
          <div className="user-email">
            {email}
          </div>
        </div>
        <Route path="/" component={CoffeesButton} />
        <Route path="/" component={FavoritesButton} />
        <Route path="/" component={CreateNewCoffeeButton} />
        <hr />
        <Route path="/">
          <LogoutButton handleClick={() => { handleLogout(userId); }} />
        </Route>
      </Menu>
      <div id="page-wrap">

        <Route exact path="/" component={Coffees} />
        <Route exact path="/create-coffee" component={CoffeeForm} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/coffee/:coffeeId" component={Coffee} />
      </div>
    </div>
  );
};

Routes.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  userId: state.session.id,
  loggedIn: state.session.loggedIn,
  email: state.session.email,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: userId => dispatch(attemptLogout(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
