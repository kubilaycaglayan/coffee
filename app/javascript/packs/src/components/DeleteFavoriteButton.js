/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React from 'react';
import PropTypes from 'prop-types';

const DeleteFavoriteButton = props => {
  const { handleClick } = props;
  return (
    <p role="button" onClick={handleClick} onKeyPress={() => {}}>
      Remove from favorites
    </p>
  );
};

DeleteFavoriteButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default DeleteFavoriteButton;
