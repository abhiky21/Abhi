import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AuthWrapper from "./AuthWrapper";
import PrivateWrapper from "./PrivateWrapper";
import { Dashboard, Facilities, FeePayment, Functions, Login, Schedule } from "../pages";

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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="functions" element={<Functions />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="fee-payment" element={<FeePayment />} />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
