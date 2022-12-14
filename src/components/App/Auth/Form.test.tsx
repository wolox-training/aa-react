import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { signUpFormStructure } from '../../../constants/form';

import Form from './Form';

describe('Form', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('should not sent the info if there is empty inputs', () => {
    fireEvent.click(screen.getByRole('button', { name: /SignUp:signUp/i }));
    signUpFormStructure.forEach(async ({ name }) => {
      expect(await screen.findByText(`SignUp:${name} is required`)).toBeInTheDocument();
    });
  });

  it('should not sent the form if there is a wrong input value', async () => {
    userEvent.type(screen.getByRole('textbox', { name: /SignUp:email/i }), 'wrong-mail@bad');
    fireEvent.click(screen.getByRole('button', { name: /SignUp:signUp/i }));
    expect(await screen.findByText('Invalid email')).toBeInTheDocument();
  });
});
