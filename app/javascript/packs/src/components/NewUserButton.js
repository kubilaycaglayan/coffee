import React from 'react';
import { Link } from 'react-router-dom';

const NewUserButton = () => (
  <div className="new-user">
    <Link to="/new-user">
      <button type="button">
        Create New User
      </button>
    </Link>
  </div>
);

export default NewUserButton;
