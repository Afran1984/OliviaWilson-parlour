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
import Appoinmentpage from "../Pages/Appoinment-Page/Appoinmentpage";
import Dashboard from "../Layout/Dashboard";
import UserOrder from "../Pages/Dashboard/UserOrder/UserOrder";
import Book from "../Pages/Dashboard/Book/Book";
import AppoinmentList from "../Pages/Dashboard/AppoinmentList/AppoinmentList";
import Review from "../Pages/Dashboard/Review/Review";


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
        },
        {
          path: '/apoinment',
          element: <PraivateRoute> <Appoinmentpage> </Appoinmentpage> </PraivateRoute> 
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'orderdata',
          element: <UserOrder></UserOrder>

        },
        {
          path: 'book',
          element: <Book></Book>
        },
        {
          path: 'appoinment',
          element: <AppoinmentList></AppoinmentList>
        },
        {
          path: 'review',
          element: <Review></Review>
        }
      ]
    },
  ]);