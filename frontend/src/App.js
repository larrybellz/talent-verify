//rrd imports


import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import CreateAccount from './pages/create_account';


//pages

import Main from './pages/main';
import AccountLogin from './pages/login';
import Home from './pages/home';
import AddEmployee from './pages/addEmployee';
import Dashboard from './pages/dashboard/index.jsx';
import Employee from './pages/view_employee';
import Search from './pages/search';
//bootstraps
import './css/styles.css'
import './css/bootstrap.min.css'
import Nav from './components/nav';
import LandingPage from './pages/landingpage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    exact:true
  },
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/d",
        element: <Dashboard />


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
        path: "employee/:id",
        element: <Employee />
      },
      {
        path: "search",
        element: <Search />
      },


    ]


  },

  
  {
    path: "login/",
    element: <AccountLogin />
  },
  
  {
    path: "create-account/",
    element: <CreateAccount />


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
