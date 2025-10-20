import { Navigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

export default function AuthWrapper() {
  const isAuthenticated = true;
  return !isAuthenticated ? (
    <AuthLayout />
  ) : (
    <Navigate to="/dashboard" replace />
  );
}
