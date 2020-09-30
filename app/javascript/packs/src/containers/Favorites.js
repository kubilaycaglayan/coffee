/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { getFavorites } from '../actions';
import Loading from '../components/Loading';
import CoffeeCard from '../components/CoffeeCard';
import { LOADING } from '../../constants';
import NoContent from '../components/NoContent';

const Favorites = props => {
  const { favoritesLoader, favorites, status } = props;

  useEffect(() => {
    favoritesLoader();
  }, [favorites.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      {
        status === LOADING
          ? <Loading />
          : favorites.length === 0
            ? <NoContent info="Favorites" />
            : (
              <div className="favorites">
                <h1>
                  Favorites
                </h1>
                <Slider {...settings}>
                  {
                  favorites.map(coffee => (
                    <CoffeeCard coffee={coffee} key={coffee.id} />
                  ))
                }
                </Slider>
              </div>
            )
      }
    </>
  );
};

Favorites.propTypes = {
  favoritesLoader: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  favoritesLoader: () => dispatch(getFavorites()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);
