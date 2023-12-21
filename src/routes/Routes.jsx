import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard/Dashboard";
import MyTask from "../pages/Dashboard/MyTask/MyTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "my-task",
        element: <MyTask />,
      },
    ],
  },
]);

export default router;
