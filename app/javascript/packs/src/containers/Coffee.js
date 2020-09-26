import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoffee } from '../actions';
import Loading from '../components/Loading';

const Coffees = props => {
  const { coffeeLoader, coffee, match } = props;
  const { coffeeId } = match.params;

  useEffect(() => {
    coffeeLoader(coffeeId);
  }, [coffee.id]);

  return (
    <>
      {
        coffeeId.toString() !== coffee.id.toString()
          ? <Loading />
          : (
            <>
              <h1>
                Coffee
              </h1>
              <h2>
                Fav?
              </h2>
              <h2>
                {coffee.favorite ? 'Yess' : 'Nopee'}
              </h2>
              <h2>
                {coffee.name}
              </h2>
              <h2>
                Description
              </h2>
              <p>
                {coffee.description}
              </p>
              <img src={coffee.photo} alt="coffee bean" />
            </>
          )
      }
    </>
  );
};

Coffees.propTypes = {
  coffeeLoader: PropTypes.func.isRequired,
  coffee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      coffeeId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  coffee: state.coffee,
});

const mapDispatchToProps = dispatch => ({
  coffeeLoader: coffeeId => dispatch(getCoffee(coffeeId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coffees);
