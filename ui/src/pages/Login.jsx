import { useState } from "react";
import { Form, Input, Button, Checkbox, Tabs, Typography } from "antd";
import AnimatedBackground from "../components/login/AnimatedBackground";

const { Title, Text } = Typography;

export default function LoginCard() {
  const [role, setRole] = useState("parent");
  const [loading, setLoading] = useState(false);

  const roles = {
    parent: {
      info: "Track attendance, marks, and fee details for your child.",
      placeholder: "Username / Roll Number",
    },
    teacher: {
      info: "Manage class attendance, marks, and student performance.",
      placeholder: "Username / Staff ID",
    },
    admin: {
      info: "Full access to school operations, reports, and notifications.",
      placeholder: "Username / Admin ID",
    },
  };

  const handleFinish = (values) => {
    setLoading(true);
    console.log("Form Values:", values);
    setTimeout(() => {
      setLoading(false);
      alert("Login being built!");
    }, 1500);
  };

  const tabItems = Object.keys(roles).map((r) => ({
    key: r,
    label: r.charAt(0).toUpperCase() + r.slice(1),
    children: (
      <Form
        layout="vertical"
        name={`${r}-login`}
        onFinish={handleFinish}
        className="flex flex-col gap-4"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            size="large"
            placeholder={roles[r].placeholder}
            className="!bg-white/10 !text-white placeholder-white/70"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            size="large"
            placeholder="Password"
            className="!bg-white/10 !text-white placeholder-white/70"
          />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked">
          <Checkbox className="text-blue-50">Remember Me</Checkbox>
        </Form.Item> */}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-600 text-white font-semibold w-full"
          >
            Login
          </Button>
        </Form.Item>

        <Text
          className="text-red-400 underline cursor-pointer"
          onClick={() => alert("Forgot Password Clicked")}
        >
          Forgot Password?
        </Text>
      </Form>
    ),
  }));

  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden 
      bg-[linear-gradient(-45deg,#a7f3d0,#6ee7b7,#3b82f6)] 
      bg-[length:400%_400%]"
      style={{ animation: "gradientBG 20s ease infinite" }}
    >
      <style>
        {`@keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }`}
      </style>

      <AnimatedBackground />

      <div className="relative z-10 w-[480px] max-w-[90%] rounded-2xl bg-white/15 p-10 shadow-2xl backdrop-blur-md border border-white/30 transition-transform hover:shadow-3xl">
        <Title level={3} className="text-blue-900 mb-2 drop-shadow">
          National Convent School
        </Title>
        <Text className="text-blue-50 mb-6 block">
          Track, Learn, and Grow Every Day!
        </Text>

        <Tabs
          activeKey={role}
          onChange={(key) => setRole(key)}
          items={tabItems}
        />

        <div className="mt-4 text-center text-sm text-blue-900 opacity-90">
          {roles[role].info}
        </div>

        <Text
          className="mt-3 text-center text-sm text-blue-50 underline cursor-pointer block"
          onClick={() => alert("Open QR login scanner!")}
        >
          Login via QR Code
        </Text>

        <Text
          className="mt-3 text-center text-sm text-red-400 underline cursor-pointer block"
          onClick={() => alert("Redirect to other institute login!")}
        >
          Not your institute?
        </Text>
      </div>
    </div>
  );
}
