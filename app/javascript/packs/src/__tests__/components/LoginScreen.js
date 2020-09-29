import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Provided from '../../containers/Provided';

test('successfully lands to the login page', () => {
  const { getByText } = render(<Provided />);
  expect(getByText(/Quick Access/)).toBeTruthy();
});

test('navigates to the new user page', () => {
  const { getByText, findAllByPlaceholderText } = render(<Provided />);
  fireEvent.click(getByText(/Create New User/));

  expect(findAllByPlaceholderText(/Password Confirmation/)).toBeTruthy();
});
