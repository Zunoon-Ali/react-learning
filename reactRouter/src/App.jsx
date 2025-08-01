import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import User from './components/User';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>,
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>,
    },
    {
      path: "/user/:user",
      element: <><Navbar /><User /></>,
    },
    {
      path: "/user",
      element: <><Navbar /><User /></>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;