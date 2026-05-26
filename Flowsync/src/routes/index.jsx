//src/routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/LandingPage";
import Login from "../pages/LoginPage";
import Signup from "../pages/SignupPage";
import Dashboard from "../pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",    element: <Landing />,
  },
  { 
    path: "/login",    element: <Login />,
  },
  { 
    path: "/signup",    element: <Signup />,
  },
  {
    path: "/dashboard",    element: <Dashboard />,
  }
]);

export default router;