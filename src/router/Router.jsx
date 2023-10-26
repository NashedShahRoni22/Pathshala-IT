import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
import About from "../pages/about/About";

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
                path:"/register",
                element:<Register/>
            },
            {
                path:"/about",
                element:<About/>
            },
        ]
    }
])