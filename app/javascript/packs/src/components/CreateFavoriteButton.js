import React from 'react';
import PropTypes from 'prop-types';

const CreateFavoriteButton = props => {
  const { handleClick } = props;
  return (
    <p onClick={handleClick}>
      Add to favorites
    </p>
  );
};

CreateFavoriteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CreateFavoriteButton;
