import React from 'react';
import { Link } from 'react-router-dom';

const CreateNewCoffeeButton = () => (
  <div className="menu-item">
    <Link to="/create-coffee">
      Create New Coffee
    </Link>
  </div>
);

export default CreateNewCoffeeButton;
