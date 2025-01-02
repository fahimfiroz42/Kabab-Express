import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";


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

          }
      ]
    },
  ]);
  
  export default Route;