import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { getFavorites } from '../actions';
import Loading from '../components/Loading';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Favorites = props => {
  const { favoritesLoader, favorites } = props;

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
        favorites.length === 0
          ? <Loading />
          : (
            <>
              <h1>
                Coffees
              </h1>
              <Slider {...settings}>
                {
                  favorites.map(coffee => (
                    <div key={coffee.id}>
                      <img src={coffee.photo} alt="bean" />
                      <h2>
                        <Link to={`/coffee/${coffee.id}`}>
                          {coffee.name}
                        </Link>
                      </h2>
                    </div>
                  ))
                }
              </Slider>
            </>
          )
      }
    </>
  );
};

Favorites.propTypes = {
  favoritesLoader: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => ({
  favoritesLoader: () => dispatch(getFavorites()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);