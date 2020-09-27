import React from 'react';
import PropTypes from 'prop-types';

const DeleteFavoriteButton = props => {
  const { handleClick } = props;
  return (
    <p onClick={handleClick}>
      Remove from favorites
    </p>
  );
};

DeleteFavoriteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default DeleteFavoriteButton;
