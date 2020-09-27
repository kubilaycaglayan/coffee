/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { getCoffees } from '../actions';
import Loading from '../components/Loading';

const Coffees = props => {
  const { coffeeLoader, coffees } = props;

  useEffect(() => {
    coffeeLoader();
  }, [coffees.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {
        coffees.length === 0
          ? <Loading />
          : (
            <div className="all-coffees">
              <h1>
                Coffees
              </h1>
              <Slider {...settings} className="mt-5 shadow">
                {
                  coffees.map(coffee => (
                    <div className="card px-4 border-0 d-flex flex-column justify-content-between" key={coffee.id}>
                      <img className="card-img-top" src={coffee.photo} alt="coffee representation" />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="stars">
                          <h5 className="card-title">
                            {coffee.name}
                          </h5>
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="far fa-star" />
                        </div>
                        <p className="card-text">
                          {coffee.description}
                        </p>
                        <Link to={`/coffee/${coffee.id}`} className="mt-3 text-right align-self-end">
                          Details
                        </Link>
                      </div>
                    </div>
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
});

const mapDispatchToProps = dispatch => ({
  coffeeLoader: () => dispatch(getCoffees()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coffees);
