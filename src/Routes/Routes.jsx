import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Error/Error";
import Home from "../Components/Home/Home";
import AllJobs from "../pages/AllJobs/AllJobs";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import UpdateJobs from "../pages/UpdateJobs.jsx/UpdateJobs";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alljobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/addajob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedjobs/:name",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(
            `https://jobnest-server-249tiz2yb-razeks-projects.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/alljobs/details/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(
            `https://jobnest-server-249tiz2yb-razeks-projects.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateJobs></UpdateJobs>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(
            `https://jobnest-server-249tiz2yb-razeks-projects.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
