import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AuthWrapper from "./AuthWrapper";
import PrivateWrapper from "./PrivateWrapper"
import Login from "../pages/Login";
import DashBoard from "../pages/Dashboard"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthWrapper />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateWrapper />}>
          <Route path="dashboard" element={<DashBoard />} />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
