import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import MainLayout from "../layout/MainLayout";
import Signin from "../pages/Signin/Signin";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'jobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: 'jobApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
            },
            {
                path: 'myApplications',
                element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
            },
            {
                path: 'addJob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
            },
            {
                path: 'myPostedJobs',
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>,
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'signin',
                element: <Signin></Signin>
            }
        ]
    },
]);

export default router;