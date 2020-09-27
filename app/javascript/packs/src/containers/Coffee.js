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
            <div className="single-coffee pt-5">
              <h1 className="pt-5">
                {coffee.name}
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
              <div className="card border-0 d-flex flex-column justify-content-between shadow" key={coffee.id}>
                <img className="card-img-top" src={coffee.photo} alt="coffee representation" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </div>
                  <p className="card-text">
                    {coffee.description}
                  </p>
                </div>
              </div>
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
