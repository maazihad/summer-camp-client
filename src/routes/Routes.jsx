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
import MyBookings from '../pages/Dashboard/MyBookings/MyBookings';
import UserHome from '../pages/Dashboard/UserHome/UserHome';
import Payment from '../pages/Dashboard/Payments/Payment';
import AdminHouse from '../pages/Dashboard/AdminHouse/AdminHouse';
import AdminRoute from './AdminRoute';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import AddClass from '../pages/Dashboard/AddClass/AddClass';
import ManageClasses from '../pages/Dashboard/ManageClasses/ManageClass';

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
         {
            path: 'user-home',
            element: <UserHome />
         },

         {
            path: 'payments',
            element: <Payment />
         },
         //=================Admin routes
         {
            path: 'admin-home',
            element: <AdminHouse />
         },
         {
            path: 'users',
            element: <AdminRoute><AllUsers /></AdminRoute>
         },
         {
            path: 'add-item',
            element: <AdminRoute><AddClass /></AdminRoute>
         },
         {
            path: 'manage-classes',
            element: <AdminRoute><ManageClasses /></AdminRoute>
         }
         //================Instructor route===================
      ]
   }
]);