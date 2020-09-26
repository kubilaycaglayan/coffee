import React from 'react';

const DeleteFavoriteButton = props => {
  const { handleClick } = props;
  return (
    <button type="button" onClick={handleClick}>
      Delete from favorites
    </button>
  );
};

export default DeleteFavoriteButton;
