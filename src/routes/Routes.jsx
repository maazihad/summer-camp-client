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
import SecretRoute from './SecretRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import UserHome from '../pages/Dashboard/UserHome/UserHome';
import Payment from '../pages/Dashboard/Payments/Payment';
import AdminHouse from '../pages/Dashboard/AdminHouse/AdminHouse';
import AdminRoute from './AdminRoute';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import AddClass from '../pages/Dashboard/AddClass/AddClass';
import ManageClasses from '../pages/Dashboard/ManageClasses/ManageClasses';
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory';
import MyClasses from '../pages/Dashboard/MyClasses/MyClasses';
import UserProfile from '../pages/Dashboard/UserProfile/UserProfile';
import MixedRoute from './MixedRoute';
import { eachClassDetails } from '../api/classes';
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
            path: 'class-details/:id',
            element: <SecretRoute><ClassDetails /></SecretRoute>,
            loader: ({ params }) => eachClassDetails(params.id)
         },

         //==========================Footer Extra route================
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
         // {
         //    index: true,
         //    element: <MyBookings />
         // },
         {
            path: 'user-home',
            element: <UserHome />
         },
         {
            path: 'admin-home',
            element: <AdminHouse />
         },
         {
            path: 'payment',
            element: <Payment />
         },
         {
            path: 'my-class',
            element: <MyClasses />
         },
         {
            path: 'payment-history',
            element: <PaymentHistory />
         },
         {
            path: 'user-profile',
            element: <UserProfile />
         },

         //=================Admin routes
         {
            path: 'users',
            element: <AdminRoute><AllUsers /></AdminRoute>
         },
         {
            path: 'add-class',
            element: <MixedRoute> <AddClass /></MixedRoute>
         },
         {
            path: 'manage-classes',
            element: <AdminRoute><ManageClasses /></AdminRoute>
         },

         //================Instructor route===================


      ]
   }
]);