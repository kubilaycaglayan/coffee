import React from 'react';
import { Link } from 'react-router-dom';

const CreateFavoriteButton = props => {
  const { handleClick } = props;
  return (
    <button type="button" onClick={handleClick}>
      Add to favorites
    </button>
  );
};

export default CreateFavoriteButton;
