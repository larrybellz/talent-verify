//rrd imports

import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import CreateAccount from './pages/create_account';


//pages
import LandingPage from './pages/landingpage';
import Main from './pages/main';
import AccountLogin from './pages/login';
import Home from './pages/home';
import AddEmployee from './pages/addEmployee';
import Dashboard from './pages/dashboard/index.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>


  },
  {
    path: "add-employee/",
    element: <AddEmployee />


  },
  {
    path: "home/",
    element: <Home />
  },
  {
    path: "main/",
    element: <Main />
  },

  {
    path: "create-account/",
    element: <CreateAccount />


  },
  {
    path: "login/",
    element: <AccountLogin />
  },
  {
    path: "*",
    element: <h1>the error page</h1>
  },

])



function App() {



  return <div>
    <RouterProvider router={router} />

  </div>


}

export default App;
