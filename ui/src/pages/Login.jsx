import React from "react";
import { UserOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import logo from "../../src/assets/Icon/eduflow.png";
import eduflowlogo from "../../src/assets/Icon/LogoEduFlow.png";
import passwordlock from "../../src/assets/Icon/passwordinput.png";
import loginImage from "../../src/assets/Icon/loginImage.jpg";
import TypingAnimation from "../components/login/TypingAnimation";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center py-10 mx-20 md:mx-40 lg:mx-50 xl:mx-60">

      {/* First Part */}

      <div className="flex flex-col lg:flex-row items-center justify-center space-x-8">
        <div className="flex flex-row lg:flex-col items-center justify-center py-10 space-y-12">
          <div className="bg-sky-400 w-full flex p-4 sm:p-10 rounded-4xl">
            <img className="rounded-full w-30 sm:w-50" src={logo} alt="EduFlow-logo" />
            <TypingAnimation />
          </div>
          <div className="hidden lg:flex">
            <img  className="rounded" src={loginImage} alt="EduFlow-logo" />
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
          <h1 className="text-center text-3xl font-semibold ">
            Login to EduFlow
          </h1>
          <div className="w-sm sm:w-lg px-10 space-y-4 py-16">
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
      </div>

      {/* Second Part */}

      <div className="bg-amber-100 px-10 md:px-20 py-10 rounded-2xl my-10">
        <h1 className="text-2xl pb-2">Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, maiores
          natus? Sapiente, inventore. Error, numquam quas! Quisquam reiciendis
          dicta labore assumenda, nihil, beatae, non adipisci aliquid corrupti
          eaque dolores quibusdam illo qui fugit odit eum repudiandae
          consequatur deserunt tempore repellat nesciunt ratione porro veniam!
          Eligendi rerum quae saepe incidunt quibusdam.
        </p>
      </div>
    </div>
  );
}

export default Login;
