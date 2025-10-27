import { Spin } from "antd";
import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout"
import { Navigate } from "react-router-dom";

export default function PrivateWrapper() {
  const [isReady, setReady] = useState(false);
  const isAuthenticated = true;

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        setReady(true);
      }, 3000);
    } else {
      setReady(true);
    }
  }, [isAuthenticated]);

  if(!isReady) {
    return(
      <div className="flex items-center justify-center h-[200px]">
        <Spin />
      </div>
    )
  }

  return isAuthenticated ? <MainLayout /> : <Navigate to='/' replace />
}
