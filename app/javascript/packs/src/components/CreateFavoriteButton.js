import React from 'react';
import PropTypes from 'prop-types';

const CreateFavoriteButton = props => {
  const { handleClick } = props;
  return (
    <button type="button" onClick={handleClick}>
      Add to favorites
    </button>
  );
};

CreateFavoriteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CreateFavoriteButton;
