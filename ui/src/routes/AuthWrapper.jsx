import { Navigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useAuthStore } from "../store/auth.store";

export default function AuthWrapper() {
  const token = useAuthStore((s) => s.token);
  const isAuthenticated = Boolean(token);
  return !isAuthenticated ? (
    <AuthLayout />
  ) : (
    <Navigate to="/dashboard" replace />
  );
}
