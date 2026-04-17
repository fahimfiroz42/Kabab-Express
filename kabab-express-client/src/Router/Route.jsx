import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Shop from "../Pages/Shop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";


import DashboardLayout from "../MainLayout/DashboardLayout";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AddItem from "../Pages/Dashboard/Admin/AddItem";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems";


  const Route =createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
          {
              path: "/",
              element: <Home/>
          },
          {
            path:'/menu',
            element:<Menu/>

          },
          {
            path:'/shop',
            element:<Shop/>
          },
          {
            path: 'login',
            element: <Login />
          },
          {
            path: 'signup',
            element: <SignUp />
          }
      ]
    },
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: 'cart',
          element: <MyCart />
        },
        {
          path: 'allusers',
          element: <AllUsers />
        },
        {
          path: 'addItem',
          element: <AddItem />
        },
        {
          path: 'manageItems',
          element: <ManageItems />
        }
      ]
    }
  ]);
  
  export default Route;