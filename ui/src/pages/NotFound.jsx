import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 px-4">
      <Result
        status="404"
        title="404"
        subTitle="The page you are looking for does not exist or has been moved"
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Go Home
          </Button>
        }
      />
    </div>
  );
}
