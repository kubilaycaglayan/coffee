import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CoffeeCard = ({ coffee }) => (
  <article className="card px-4 border-0 d-flex flex-column justify-content-between shadow" key={coffee.id}>
    <img className="card-img-top" src={coffee.photo} alt="coffee representation" />
    <div className="card-body d-flex flex-column justify-content-between">
      <div className="stars">
        <h5 className="card-title">
          {coffee.name}
        </h5>
        <div className="d-flex justify-content-between">
          <div>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
          </div>
          <div>
            {
              coffee.favorite
                ? <div className="badge badge-success text-white">Your Favorite</div>
                : ''
            }
          </div>
        </div>
      </div>
      <p className="card-text">
        {coffee.description}
      </p>
      <Link to={`/coffee/${coffee.id}`} className="mt-3 text-right align-self-end">
        Details
      </Link>
    </div>
  </article>
);

CoffeeCard.propTypes = {
  coffee: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CoffeeCard;
