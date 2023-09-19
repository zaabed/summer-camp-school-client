import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/StudentDashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/StudentDashboard/UserHome/UserHome";
import InstructorHome from "../Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import UpdateClass from "../Pages/Dashboard/InstructorDashboard/UpdateClass/UpdateClass";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import UpdateCourseStatus from "../Pages/Dashboard/AdminDashboard/UpdateCourseStatus/UpdateCourseStatus";
import DenyCourseStatus from "../Pages/Dashboard/AdminDashboard/UpdateCourseStatus/DenyCourseStatus";
import SeeFeedback from "../Pages/Dashboard/InstructorDashboard/SeeFeedback/SeeFeedback";
import EnrolledClasses from "../Pages/Dashboard/StudentDashboard/EnrolledClasses/EnrolledClasses";
import ApprovedClasses from "../Pages/Dashboard/InstructorDashboard/ApprovedClasses/ApprovedClasses";
import UpdateApprovedClass from "../Pages/Dashboard/InstructorDashboard/ApprovedClasses/UpdateApprovedClass";
import Payment from "../Pages/Dashboard/PaymentDashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";

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

        ]
    },

    //All Dashboard Route

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            //Admin Route
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'updateClassStatus/:id',
                element: <UpdateCourseStatus></UpdateCourseStatus>,
                loader: ({ params }) => fetch(`https://summer-school-camp-server-sage.vercel.app/updateCoursesStatus/${params.id}`)
            },
            {
                path: 'denyClassStatus/:id',
                element: <DenyCourseStatus></DenyCourseStatus>,
                loader: ({ params }) => fetch(`https://summer-school-camp-server-sage.vercel.app/updateCoursesStatus/${params.id}`)
            },

            //Instructor Route
            {
                path: 'instructorHome',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'myClasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: 'updateClass/:id',
                element: <UpdateClass></UpdateClass>,
                loader: ({ params }) => fetch(`https://summer-school-camp-server-sage.vercel.app/instructorCourses/${params.id}`)
            },
            {
                path: 'instructorFeedback/:id',
                element: <SeeFeedback></SeeFeedback>,
                loader: ({ params }) => fetch(`https://summer-school-camp-server-sage.vercel.app/instructorCourses/${params.id}`)
            },
            {
                path: 'approvedClasses',
                element: <InstructorRoute><ApprovedClasses></ApprovedClasses></InstructorRoute>
            },
            {
                path: 'updateApprovedClass/:id',
                element: <UpdateApprovedClass></UpdateApprovedClass>,
                loader: ({ params }) => fetch(`https://summer-school-camp-server-sage.vercel.app/approvedCourses/${params.id}`)
            },
            //Student Route
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            //Payment Route
            {
                path: 'payment',
                element: <Payment></Payment>
            }
        ]
    }
])