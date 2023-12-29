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
import HomeCourses from "../pages/home/HomeCourses";
import Features from "../pages/features/features";
import ContactUs from "../contact/ContactUs";
import ForgetPassword from "../pages/auth/ForgetPassword";
import Profile from "../pages/profile/Profile";
import DiscountForm from "../shared/discount/DiscountForm";
import Dashboard from "../pages/profile/Dashboard";
import Invoices from "../pages/profile/Invoices";
import InvoicesDetails from "../pages/profile/InvoicesDetails";
import HomeSeminar from "../pages/home/HomeSeminar";
import CourseVideos from "../pages/auth/CourseVideos";
import HomeStories from "../pages/home/HomeStories";
import FreeCourseVideo from "../pages/auth/FreeCourseVideo";

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
        path: "/forget_password",
        element: <ForgetPassword/>,
      },
      {
        path: "/courses",
        element: <HomeCourses />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/course_details/:id",
        element: <CourseView />,
      },
      {
        path: "/contact_us",
        element: <ContactUs />,
      },
      {
        path: "/discount_form",
        element: <DiscountForm />,
      },
      {
        path: "/join_seminar",
        element: <HomeSeminar />,
      },
      {
        path: "/success_stories",
        element: <HomeStories />,
      },
      {
        path: "/free_course_video",
        element: <FreeCourseVideo />,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/invoices",
        element: (
          <PrivateRoute>
            <Invoices />
          </PrivateRoute>
        ),
      },
      {
        path: "/invoices/:id",
        element: (
          <PrivateRoute>
            <InvoicesDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/course_videos/:id",
        element: (
          <PrivateRoute>
            <CourseVideos />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
