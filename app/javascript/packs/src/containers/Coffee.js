import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { attemptDeleteFav, attemptCreateFav, getCoffee } from '../actions';
import Loading from '../components/Loading';
import CreateFavoriteButton from '../components/CreateFavoriteButton';
import DeleteFavoriteButton from '../components/DeleteFavoriteButton';

const Coffees = props => {
  const {
    coffeeLoader, coffee, match, createFavHandler, deleteFavHandler,
  } = props;
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
            <div className="single-coffee">
              <h1>
                Coffee
              </h1>
              <h2>
                Fav?
              </h2>
              <h2>
                {
                  coffee.favorite
                    ? <DeleteFavoriteButton handleClick={() => { deleteFavHandler(coffee.id); }} />
                    : <CreateFavoriteButton handleClick={() => { createFavHandler(coffee.id); }} />
                }
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
            </div>
          )
      }
    </>
  );
};

Coffees.propTypes = {
  coffeeLoader: PropTypes.func.isRequired,
  createFavHandler: PropTypes.func.isRequired,
  deleteFavHandler: PropTypes.func.isRequired,
  coffee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    favorite: PropTypes.bool.isRequired,
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
  createFavHandler: coffeeId => dispatch(attemptCreateFav(coffeeId)),
  deleteFavHandler: coffeeId => dispatch(attemptDeleteFav(coffeeId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coffees);
