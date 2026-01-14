import { Outlet } from "react-router-dom";
import MovingDotBackground from "../components/page/login/MovingDotBackground";

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen bg-sky-100 flex flex-col justify-center items-center overflow-hidden">
      <MovingDotBackground />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
