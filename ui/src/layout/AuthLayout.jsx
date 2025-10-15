import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Outlet />
    </div>
  );
}
