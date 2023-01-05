import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClientProvider, QueryClient } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { signUpFormStructure } from '../../constants/form';

import SignUp from '.';

describe('SignUp', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <SignUp />
      }
    ]);

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
  });

  it('should not sent the info if there is empty inputs', () => {
    fireEvent.click(screen.getByRole('button', { name: /SignUp:optionOne/i }));
    signUpFormStructure.forEach(async ({ name }) => {
      expect(await screen.findByText(`SignUp:${name} is required`)).toBeInTheDocument();
    });
  });

  it('should not sent the form if there is a wrong input value', async () => {
    userEvent.type(screen.getByRole('textbox', { name: /SignUp:email/i }), 'wrong-mail@bad');
    fireEvent.click(screen.getByRole('button', { name: /SignUp:optionOne/i }));
    expect(await screen.findByText('Invalid email')).toBeInTheDocument();
  });
});
