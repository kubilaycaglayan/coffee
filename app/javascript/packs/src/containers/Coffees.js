import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoffees } from '../actions';

const Coffees = props => {
  const { coffeeLoader, coffees } = props;

  useEffect(() => {
    coffeeLoader();
  }, []);

  return (
    <>
      <h1>
        Coffees
      </h1>
      <div>
        {
          coffees.map(coffee => (
            <div key={coffee.id}>
              <h2>{coffee.name}</h2>
            </div>
          ))
        }
      </div>
    </>
  );
};

Coffees.propTypes = {
  coffeeLoader: PropTypes.func.isRequired,
  coffees: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  coffees: state.coffees,
});

const mapDispatchToProps = dispatch => ({
  coffeeLoader: () => dispatch(getCoffees()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coffees);
