import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import MainLayout from "../layout/MainLayout";
import Signin from "../pages/Signin/Signin";



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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            }
        ]
    },
]);

export default router;