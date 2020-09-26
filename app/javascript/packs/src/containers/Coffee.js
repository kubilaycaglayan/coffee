import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoffee } from '../actions';

const Coffees = props => {
  const { coffeeLoader, coffee } = props;

  useEffect(() => {
    coffeeLoader();
  }, []);

  return (
    <>
      <h1>
        Coffee
      </h1>
      <h2>
        {coffee.name}
      </h2>
    </>
  );
};

Coffees.propTypes = {
  coffeeLoader: PropTypes.func.isRequired,
  coffee: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  coffee: state.coffee,
});

const mapDispatchToProps = dispatch => ({
  coffeeLoader: () => dispatch(getCoffee()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coffees);
