import React from 'react';
import { Link } from 'react-router-dom';

const FavoritesButton = () => (
  <div className="menu-item">
    <Link to="/favorites">
      Favorites
    </Link>
  </div>
);

export default FavoritesButton;
