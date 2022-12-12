import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { signUpFormStructure } from '../../../constants/form';

import Form from './Form';

describe('Form', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('should not sent the info if there is empty inputs', () => {
    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
    signUpFormStructure.forEach(async ({ label }) => {
      expect(await screen.findByText(`${label} is required`)).toBeInTheDocument();
    });
  });

  it('should not sent the form if there is a wrong input value', async () => {
    userEvent.type(screen.getByRole('textbox', { name: /Email/i }), 'wrong-mail@bad');
    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));
    expect(await screen.findByText('Invalid email')).toBeInTheDocument();
  });
});
