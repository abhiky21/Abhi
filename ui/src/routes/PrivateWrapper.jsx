import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ParentLayout from "../layout/ParentLayout";

export default function PrivateWrapper() {
  const [isReady, setReady] = useState(false);
  const isAuthenticated = true;

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        setReady(true);
      }, 1000);
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

  return isAuthenticated ? <ParentLayout /> : <Navigate to="/" replace />;
}
