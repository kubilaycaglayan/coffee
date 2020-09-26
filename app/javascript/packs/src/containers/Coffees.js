import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { getCoffees } from '../actions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Coffees = props => {
  const { coffeeLoader, coffees } = props;

  useEffect(() => {
    coffeeLoader();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <h1>
        Coffees
      </h1>
      <Slider {...settings}>
        {
          coffees.map(coffee => (
            <div key={coffee.id}>
              <h2>{coffee.name}</h2>
              <img src={coffee.photo} alt="bean" />
            </div>
          ))
        }
      </Slider>
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
