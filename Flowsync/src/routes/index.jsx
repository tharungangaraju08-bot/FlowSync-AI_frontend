//src/routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/LandingPage";
import Login from "../pages/LoginPage";
import Signup from "../pages/SignupPage";
import Dashboard from "../pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Landing />
      </MainLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;