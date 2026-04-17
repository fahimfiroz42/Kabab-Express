import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Shop from "../Pages/Shop";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";


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
  ]);
  
  export default Route;