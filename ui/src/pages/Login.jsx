import React from "react";
import { UserOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import logo from "../../src/assets/eduflow.png";
import eduflowlogo from "../../src/assets/LogoEduFlow.png";
import passwordlock from "../../src/assets/passwordinput.png";
import loginImage from "../../src/assets/loginImage.jpg";

import TypingAnimation from "./TypingAnimation";

function Login() {
  return (
    <div className="flex items-center justify-center py-10 mx-20">
      <div className="flex flex-col items-center justify-center py-10 mx-20 space-y-12">
        <div className="bg-sky-400 w-250 flex p-10 rounded-4xl">
          <img className="rounded-full w-50" src={logo} alt="EduFlow-logo" />
          <TypingAnimation/>
        </div>
        <div className="">
          <img className="rounded" src={loginImage} alt="EduFlow-logo" />
        </div>
      </div>
      <div className="border border-gray-300 box-border rounded-xl mx-10">
        <h1 className="bg-[#023047] text-2xl text-white py-6 text-center rounded-t-xl font-bold">
          LOGIN
        </h1>
        <img
          className="rounded-full w-25 bg-white ml-52 p-4 relative bottom-5"
          src={eduflowlogo}
          alt="EduFlow-logo"
        />
        <h1 className="text-center text-3xl font-semibold ">
          Login to EduFlow
        </h1>
        <div className="w-lg px-10 space-y-4 py-16">
          <Input
            size="large"
            placeholder="Enter your username"
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          />

          <Input.Password
            size="large"
            placeholder="input password"
            prefix={
              <img
                src={passwordlock}
                alt="lock"
                style={{ color: "rgba(0,0,0,.25)", width: "20px" }}
              />
            }
          />

          <Button type="primary" style={{ marginTop: "20px" }} block>
            Login
          </Button>
          <p className="text-end text-sm font-light underline text-blue-600">
            <a href="#">Forgot username/password</a>
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Login;
