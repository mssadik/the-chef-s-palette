import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Blog from './components/Blog/Blog.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails .jsx';
import PrivetaRout from './PrivetaRoute/PrivetaRout';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://the-chef-s-paletter-server-mssadik.vercel.app/chefData')
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/chefDetails/:id',
        element: <PrivetaRout><ChefDetails></ChefDetails></PrivetaRout>,
        loader: ({params}) => fetch (`https://the-chef-s-paletter-server-mssadik.vercel.app/chefData/${params.id}`)
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
