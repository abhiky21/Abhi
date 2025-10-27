import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

export default function MainLayout() {
  const maxWTW = "w-full max-w-[1360px] mx-auto";
  return (
    <div className="h-screen flex flex-col bg-(--page-bg)">
      <div className="h-[80px] border-b border-gray-200 bg-white">
        <div className={`h-full ${maxWTW}`}>
          <Header />
        </div>

        <div className={`flex-1 [scrollbar-gutter:stable] overflow-auto relative scrollb space-thumb round-thumb ${maxWTW}`}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}