import React from 'react';
import PropTypes from 'prop-types';

const DeleteFavoriteButton = props => {
  const { handleClick } = props;
  return (
    <button type="button" onClick={handleClick}>
      Delete from favorites
    </button>
  );
};

DeleteFavoriteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default DeleteFavoriteButton;
