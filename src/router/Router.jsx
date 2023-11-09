import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
import About from "../pages/about/About";
import Login from "../pages/auth/Login";

export const router = createBrowserRouter([

    {
        path:"/",
        element: <Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            },
        ]
    }
])