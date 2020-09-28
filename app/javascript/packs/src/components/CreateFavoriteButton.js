/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';

const CreateFavoriteButton = props => {
  const { handleClick } = props;
  return (
    <p role="button" onClick={handleClick} onKeyPress={() => {}}>
      Add to favorites
    </p>
  );
};

CreateFavoriteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CreateFavoriteButton;
