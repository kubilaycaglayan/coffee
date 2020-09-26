import React from 'react';
import FlashMessage from 'react-flash-message';

const Flash = ({ message }) => (
  <div className="flash">
    <FlashMessage duration={5000}>
      <strong>{message}</strong>
    </FlashMessage>
  </div>
);

export default Flash;
