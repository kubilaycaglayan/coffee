import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { attemptLogout } from '../actions';
import LogoutButton from '../components/LogoutButton';
import Coffees from './Coffees';
import Favorites from './Favorites';
import Coffee from './Coffee';
import CoffeeForm from './CoffeeForm';

const Routes = props => {
  const { handleLogout, userId, email } = props;

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleStateChange = state => {
    setIsOpen(state.isOpen);
  };

  return (
    <div className="inside">
      <Menu
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        isOpen={isOpen}
        onStateChange={state => { handleStateChange(state); }}
      >
        <div className="menu-item user-info">
          <div className="user-image">
            <img src="http://lofrev.net/wp-content/photos/2017/03/user_blue_logo.png" alt="representational user" />
          </div>
          <div className="user-email">
            <p>Ariel Camus</p>
            {email}
          </div>
        </div>
        <NavLink onClick={closeMenu} exact to="/" className="menu-item">Coffees</NavLink>
        <NavLink onClick={closeMenu} to="/favorites" className="menu-item">Favorites</NavLink>
        <NavLink onClick={closeMenu} to="/create-coffee" className="menu-item">Create New Coffee</NavLink>
        <hr />
        <Route path="/">
          <LogoutButton handleClick={() => { handleLogout(userId); }} />
        </Route>
      </Menu>
      <div id="page-wrap" className="coffee-main">
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
  userId: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
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
