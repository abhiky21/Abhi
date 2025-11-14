/* eslint-disable no-unused-vars */
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ParentLayout, PrincipalLayout, TeacherLayout } from "../layout/";
import { useAuthStore } from "../store/auth.store";
import * as authService from "../services/auth.service";

export default function PrivateWrapper() {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);
  const removeToken = useAuthStore((s) => s.removeToken);
  const [isReady, setReady] = useState(false);
  const isAuthenticated = Boolean(token);

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        const { udtl } = await authService.user();
        setUser(udtl);
        if (!udtl) {
          removeToken();
        }
        setReady(true);
      })();
    } else {
      setReady(true);
    }
  }, [isAuthenticated]);

  if (!isReady) {
    return (
      <div className="flex items-center justify-center h-[200px]">
        <Spin />
      </div>
    );
  }

  if (!isAuthenticated) return <Navigate to="/" replace />;

  switch (user?.type) {
    case "principal":
      return <PrincipalLayout />;
    case "teacher":
      return <TeacherLayout />;
    case "parent":
      return <ParentLayout />;
  }
}
