import ReactDOM from 'react-dom/client';
import './index.css';
import AuthProvider from './providers/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// =======>>>Create a client<<<=========
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Toaster />
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
);