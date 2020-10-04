import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Provided from '../../containers/Provided';

test('can\'t create a user without CSRF', async () => {
  const user = {
    email: `kubilay${parseInt((Math.random() * 9999), 10)}@microverse.com`,
    password: '000000',
  };

  const { getByText, getByPlaceholderText } = render(<Provided />);
  fireEvent.click(getByText(/Create New User/));

  const emailField = await getByPlaceholderText(/Email/);
  const passwordField = await getByPlaceholderText('Password');
  const passwordConfirmationField = await getByPlaceholderText(/Password Confirmation/);

  fireEvent.change(emailField, { target: { value: user.email } });
  fireEvent.change(passwordField, { target: { value: user.password } });
  fireEvent.change(passwordConfirmationField, { target: { value: user.password } });

  const createUserButton = await screen.getByTestId('create-user-button');
  fireEvent.click(createUserButton);

  const notification = await screen.findByText(/Something went wrong./);
  expect(notification).toBeTruthy();
});
