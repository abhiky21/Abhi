import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import { useAuthStore } from "../store/auth.store";
import { logoText, loginImage2 } from "../assets/icon";
import * as authService from "../services/auth.service";

export default function Login() {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuthStore((state) => state);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { email, password } = values;
    setLoading(true);
    const { success, result } = await authService.login(email, password);
    setLoading(false);
    if (success) {
      setToken(result.token);
      setUser(result.user);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex w-fit flex-row items-center justify-center shadow">
      <div className="hidden xl:flex flex-col items-center justify-center py-0 space-y-12">
        <div className="hidden lg:flex">
          <img
            className="rounded-tl-xl rounded-bl-xl w-[879px] h-[608px]"
            src={loginImage2}
            alt="EduFlow-logo"
          />
        </div>
      </div>
      <div className="border-r border-b border-gray-300 w-100 sm:w-max box-border rounded-tr-xl rounded-br-xl h-[608px] bg-sky-100">
        <h1 className="bg-[#023047] text-3xl text-white py-6 text-center rounded-tr-xl font-bold">
          LOGIN
        </h1>
        <img
          className="rounded-full w-25 bg-white ml-38 sm:ml-52 p-4 relative bottom-5"
          src={logoText}
          alt="EduFlow-logo"
        />
        <h1 className="text-center text-3xl font-semibold ">
          Login to EduFlow
        </h1>
        <div className="w-sm sm:w-lg px-10 space-y-4 py-16">
          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="on"
            initialValues={{ email: "parent@parent.com", password: "123456" }}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
              className="mb-10!"
            >
              <Input
                size="large"
                placeholder="Enter your email"
                prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                className="h-16! text-2xl!"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
              className="mb-10!"
            >
              <Input.Password
                size="large"
                placeholder="Enter your password"
                prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                className="h-16! text-2xl!"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                loading={loading}
                className="h-16! text-3xl!"
              >
                Login
              </Button>
            </Form.Item>
          </Form>

          <p className="text-end text-lg font-light underline text-blue-600">
            <a href="#">Forgot username/password</a>
          </p>
        </div>
      </div>
    </div>
  );
}
