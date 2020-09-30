import React from 'react';
import PropTypes from 'prop-types';

const NoContent = ({ info }) => (
  <div className="no-content">
    <p>
      {` ${info} `}
      is empty. Please add items.
    </p>
  </div>
);

NoContent.propTypes = {
  info: PropTypes.string.isRequired,
};

export default NoContent;
