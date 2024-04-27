import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage.jsx';
import Root from './Components/Root.jsx';
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import AllArtAndCraft from './Pages/AllArtAndCraft';
import AddCraft from './Pages/AddCraft';
import Mycraft from './Pages/Mycraft';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import CraftDetails from './Pages/CraftDetails.jsx';
import UpdateCraft from './Pages/UpdateCraft.jsx';
import FilterCategoryPage from './Pages/FilterCategoryPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/artAndCraft',
        element: <AllArtAndCraft></AllArtAndCraft>,
      },
      {
        path: '/filterCategory/:id',
        element: <FilterCategoryPage></FilterCategoryPage>,
        loader: () => fetch('http://localhost:5000/allCraft'),
      },
      {
        path: '/addCraft',
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: '/myCraft',
        element: (
          <PrivateRoute>
            <Mycraft></Mycraft>
          </PrivateRoute>
        ),
      },
      {
        path: '/craftDetails/:id',
        element: (
          <PrivateRoute>
            <CraftDetails></CraftDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/craftsUpdate/:id',
        element: (
          <PrivateRoute>
            <UpdateCraft></UpdateCraft>
          </PrivateRoute>
        ),
      },
      // {
      //   path: '/contact',
      //   element: <Contact></Contact>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
