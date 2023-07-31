import './App.css';
import AboutUs from './pages/AboutUs';
import Calculator from './pages/Calculator';

import Contacts from './pages/Contacts';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Plans from './pages/plans';

import HomeLayout from './ui/HomeLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/plans',
          element: <Plans />,
        },
        {
          path: '/contacts',
          element: <Contacts />,
        },
        {
          path: '/faq',
          element: <Faq />,
        },

        {
          path: '/about-us',
          element: <AboutUs />,
        },
        {
          path: '/calculator',
          element: <Calculator />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
