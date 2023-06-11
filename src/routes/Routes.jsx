import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Authentication from '../pages/Authentication/Authentication';
import Home from '../pages/Home/Home';
import Instructors from '../pages/Instructors/Instructors';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: 'authentication',
            element: <Authentication />
         },
         {
            path: 'instructors',
            element: <Instructors />
         }
      ]
   },

]);