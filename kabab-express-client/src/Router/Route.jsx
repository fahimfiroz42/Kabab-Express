import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";


  const Route =createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
          {
              path: "/",
              element: <Home/>
          }
      ]
    },
  ]);
  
  export default Route;