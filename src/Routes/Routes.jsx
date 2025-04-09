import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Team from "../Pages/OurTeam/Team";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import UsersInfo from "../Pages/UserInfo/UsersInfo/UserInfo"
import PraivateRoute from "./PraivateRoute";


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
          element: <PraivateRoute><Portfolio></Portfolio></PraivateRoute> 
        },
        {
          path: 'ourteam',
          element: <PraivateRoute><Team></Team></PraivateRoute> 
        },
        {
          path: 'contact',
          element: <PraivateRoute><Contact></Contact></PraivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '/profile',
          element: <PraivateRoute><UsersInfo></UsersInfo></PraivateRoute>
        }
      ]
    },
  ]);