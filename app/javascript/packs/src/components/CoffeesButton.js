import React from 'react';
import { Link } from 'react-router-dom';

const CoffeesButton = props => {
  const { url } = props.match;
  console.log("IN COFFEES BUTTON => url, match", url, props.match);

  return (
    <div className={`menu-item ${url === '/' ? 'active' : ''}`}>
      <Link to="/">
        Coffees
      </Link>
    </div>
  );
};

export default CoffeesButton;
