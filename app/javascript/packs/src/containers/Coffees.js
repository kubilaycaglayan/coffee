import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    arrows: true,
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
