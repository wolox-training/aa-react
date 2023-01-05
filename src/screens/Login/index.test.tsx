import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClientProvider, QueryClient } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { signUpFormStructure } from '../../constants/form';

import Login from '.';

const server = setupServer();

describe('Login', () => {
  const queryClient = new QueryClient();

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: <p>home page</p>
      }
    ]);

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
  });

  it('should not sent the info if there is empty inputs', () => {
    fireEvent.click(screen.getByRole('button', { name: /Login:optionOne/i }));
    signUpFormStructure.forEach(async ({ name }) => {
      expect(await screen.findByText(`Login:${name} is required`)).toBeInTheDocument();
    });
  });

  it('should not sent the form if there is a wrong input value', async () => {
    userEvent.type(screen.getByRole('textbox', { name: /Login:email/i }), 'wrong-mail@bad');
    fireEvent.click(screen.getByRole('button', { name: /Login:optionOne/i }));
    expect(await screen.findByText('Invalid email')).toBeInTheDocument();
  });

  it('should sent the request and redirects to home page', async () => {
    server.use(rest.post('/login', (req, res, ctx) => res(ctx.json({ ok: true, data: { token: '123' } }))));
    userEvent.type(screen.getByRole('textbox', { name: /Login:email/i }), 'test@mail.com');
    userEvent.type(screen.getByLabelText(/Login:password/i), '123');
    fireEvent.click(screen.getByRole('button', { name: /Login:optionOne/i }));
    expect(await screen.findByText(/home page/i)).toBeInTheDocument();
  });
});
