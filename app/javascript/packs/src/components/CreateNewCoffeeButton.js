import React from 'react';
import { Link } from 'react-router-dom';

const CreateNewCoffeeButton = () => {

  return (
    <Link to="/createNewCoffee">
      Create New Coffee
    </Link>
  );
};

export default CreateNewCoffeeButton;
