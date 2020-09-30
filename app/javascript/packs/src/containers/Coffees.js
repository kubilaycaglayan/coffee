/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { getCoffees } from '../actions';
import Loading from '../components/Loading';
import NoContent from '../components/NoContent';
import CoffeeCard from '../components/CoffeeCard';
import { LOADING } from '../../constants';

const Coffees = props => {
  const { coffeeLoader, coffees, status } = props;

  useEffect(() => {
    coffeeLoader();
  }, [coffees.length]);

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
          : coffees.length === 0
            ? <NoContent info="Coffees"/>
            : (
            <div className="all-coffees">
              <h1>
                Coffees
              </h1>
              <Slider {...settings} className="mt-5">
                {
                  coffees.map(coffee => (
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

Coffees.propTypes = {
  coffeeLoader: PropTypes.func.isRequired,
  coffees: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  coffees: state.coffees,
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  coffeeLoader: () => dispatch(getCoffees()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coffees);
