import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Team from "../Pages/OurTeam/Team";
import Contact from "../Pages/Contact/Contact";


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
        },
        {
          path: 'ourteam',
          element: <Team></Team>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);