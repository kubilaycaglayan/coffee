import React from 'react';
import { Link } from 'react-router-dom';

const NewUserButton = () => {

  return (
    <Link to="/new-user">
      Create New User
    </Link>
  );
};

export default NewUserButton;
