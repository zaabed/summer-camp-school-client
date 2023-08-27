import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/StudentDashboard/MyCart/MyCart";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },

    //All Dashboard Route

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            //Student Route
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            }
        ]
    }
])