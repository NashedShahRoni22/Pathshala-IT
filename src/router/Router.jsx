import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
import About from "../pages/about/About";
import Login from "../pages/auth/Login";
import CourseView from "../pages/courses/CourseView";
import PaymentPage from "../pages/payment/PaymentPage";
import PrivateRoute from "./PrivateRoute";
import Verification from "../pages/auth/Verification";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/verification",
        element: <Verification />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/course_details/:id",
        element: <CourseView />,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
