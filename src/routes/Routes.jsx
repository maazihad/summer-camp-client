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
   }
]);