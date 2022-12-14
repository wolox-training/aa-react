import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import App from 'components/App';
import 'config/i18n';
import 'scss/application.scss';

import reportWebVitals from './reportWebVitals';
import routes from './routes/app-routes';
import App from './components/App';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter(routes);

const renderApp = () => {
  const queryClient = new QueryClient();
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App>
          <RouterProvider router={router} />
        </App>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

// Render once
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
