import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Authentication from '../pages/Authentication/Authentication';
import Home from '../pages/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import AboutUs from '../pages/AboutUs/AboutUs';
import TermsAndConditions from '../pages/TermsAndConditions/TermsAndConditions';
import PrivacyAndPolicy from '../pages/PrivacyAndPolicy/PrivacyAndPolicy';
import CookiePolicy from '../pages/CookiePolicy/CookiePolicy';
import Contact from '../pages/Contact/Contact';
import ClassDetails from '../pages/Classes/ClassDetails';
import { eachClassDetails } from '../api/get';
import SecretRoute from './SecretRoute';
import DashboardLayout from '../layouts/DashboardLayout';

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
         },
         {
            path: 'classes',
            element: <Classes />
         },
         {
            path: 'class/:id',
            element: <SecretRoute><ClassDetails /></SecretRoute>,
            loader: ({ params }) => eachClassDetails(params.id)
         },
         {
            path: 'about-us',
            element: <AboutUs />
         },
         {
            path: 'terms',
            element: <TermsAndConditions />
         },
         {
            path: 'privacy',
            element: <PrivacyAndPolicy />
         },
         {
            path: 'cookie',
            element: <CookiePolicy />
         },
         {
            path: 'contact',
            element: <Contact />
         },
      ]
   },
   {
      path: '/dashboard',
      element: <SecretRoute><DashboardLayout /></SecretRoute>,
      children: [
         {
            index: true,
            element: <MyBookings />
         },
         // {
         //    path: 'userhome',
         //    element: <UserHome />
         // },

         // {
         //    path: 'payment',
         //    element: <Payment />
         // },
         //=================Admin routes
         {
            path: 'adminhome',
            element: <AdminHome />
         },
         {
            path: 'users',
            element: <AdminRoute><users /></AdminRoute>
         },
         {
            path: 'additem',
            element: <AdminRoute><AddItem /></AdminRoute>
         },
         {
            path: 'manageitems',
            element: <AdminRoute><ManageItems /></AdminRoute>
         }
      ]
   }
]);