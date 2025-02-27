import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'portfolio',
          element: <Portfolio></Portfolio>
        }
      ]
    },
  ]);