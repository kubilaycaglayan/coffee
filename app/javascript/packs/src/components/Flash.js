import React from 'react';
import PropTypes from 'prop-types';
import FlashMessage from 'react-flash-message';

const Flash = ({ message }) => (
  <>
    {
      message !== 'false'
        ? (
          <div className="flash">
            <FlashMessage duration={5000}>
              <strong>
                <span role="img" aria-label="information">
                  💡
                </span>
                {message}
              </strong>
            </FlashMessage>
          </div>
        )
        : ''
    }
  </>
);

Flash.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Flash;
