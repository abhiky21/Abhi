import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import { logoImg } from "../assets/icon";
import eduflowlogo from "../assets/Icon/LogoEduFlow.png";
import loginImage from "../assets/Icon/loginImage.jpg";
import TypingAnimation from "../components/login/TypingAnimation";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center py-10 mx-20 md:mx-40 lg:mx-50 xl:mx-60">
      {/* First Part */}

      <div className="flex flex-col lg:flex-row items-center justify-center space-x-8">
        <div className="flex flex-row lg:flex-col items-center justify-center py-10 space-y-12">
          <div className="bg-sky-400 w-full flex p-4 sm:p-10 rounded-4xl">
            <img className="rounded-full w-30 sm:w-50" src={logoImg} alt="EduFlow-logo" />
            <TypingAnimation />
          </div>
          <div className="hidden lg:flex">
            <img className="rounded" src={loginImage} alt="EduFlow-logo" />
          </div>
        </div>
        <div className="border border-gray-300 w-100 sm:w-max box-border rounded-xl">
          <h1 className="bg-[#023047] text-2xl text-white py-6 text-center rounded-t-xl font-bold">
            LOGIN
          </h1>
          <img
            className="rounded-full w-25 bg-white ml-38 sm:ml-52 p-4 relative bottom-5"
            src={eduflowlogo}
            alt="EduFlow-logo"
          />
          <h1 className="text-center text-3xl font-semibold ">Login to EduFlow</h1>
          <div className="w-sm sm:w-lg px-10 space-y-4 py-16">
            <Form name="login" layout="vertical" autoComplete="true">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter your email"
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                  { min: 6, message: "Password must be at least 6 characters!" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                  prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Login
                </Button>
              </Form.Item>
            </Form>

            <p className="text-end text-sm font-light underline text-blue-600">
              <a href="#">Forgot username/password</a>
            </p>
          </div>
        </div>
      </div>

      {/* Second Part */}

      <div className="bg-amber-100 px-10 md:px-20 py-10 rounded-2xl my-10">
        <h1 className="text-2xl pb-2">Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, maiores natus? Sapiente,
          inventore. Error, numquam quas! Quisquam reiciendis dicta labore assumenda, nihil, beatae,
          non adipisci aliquid corrupti eaque dolores quibusdam illo qui fugit odit eum repudiandae
          consequatur deserunt tempore repellat nesciunt ratione porro veniam! Eligendi rerum quae
          saepe incidunt quibusdam.
        </p>
      </div>
    </div>
  );
}

export default Login;
