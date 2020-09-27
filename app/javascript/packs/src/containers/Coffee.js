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
              <h1 className="pt-5 pb-3">
                {coffee.name}
              </h1>
              <div className="card border-0 d-flex flex-column justify-content-between shadow" key={coffee.id}>
                <div className="signature-wrapper d-flex justif-content-between align-items-center">
                  <img className="card-img-top" src={coffee.photo} alt="coffee representation" />
                  <div className="signature d-flex justify-content-start align-items-center">
                    <img src="http://lofrev.net/wp-content/photos/2017/03/user_blue_logo.png" alt="representational user" />
                    <div className="pl-2 pb-1">
                      <p>
                        Kubilay Caglayan
                      </p>
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h2>
                    About This Coffee
                  </h2>
                  <p className="card-text">
                    {coffee.description}
                  </p>
                  <h2>
                    Altitude
                  </h2>
                  <p className="card-text">
                    650m.
                  </p>
                  <h2>
                    Blend?
                  </h2>
                  <p className="card-text">
                    None of our products is blend. We favor the quality more than anything else.
                  </p>
                </div>
              </div>
              <div className="subtitle">
                {
                  coffee.favorite
                    ? <DeleteFavoriteButton handleClick={() => { deleteFavHandler(coffee.id); }} />
                    : <CreateFavoriteButton handleClick={() => { createFavHandler(coffee.id); }} />
                }
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
