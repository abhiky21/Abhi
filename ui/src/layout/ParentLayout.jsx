import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";

export default function ParentLayout() {
  return (
    <div className="h-screen flex flex-col bg-(--page-bg)">
      <div className="h-[80px] border-b border-gray-200 bg-white">
        <Header />
      </div>
        <div className="float-left">
          <Navbar />
        </div>

      <div className="flex-1 [scrollbar-gutter:stable] overflow-auto relative scrollb space-thumb round-thumb">
        <Outlet />
      </div>
    </div>
  );
}
