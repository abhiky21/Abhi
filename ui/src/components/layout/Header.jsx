/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import ComingSoon from "../common/ComingSoon";
import { Avatar, Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import profilelogo from "../../store/profile.jpg";
import { items } from "../../store/assets";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-[#BDBDBD] w-full h-full text-[#333333]">
      <div className="flex justify-between p-2">
        <div className="flex justify-center items-center pl-4">
          <div className="flex items-center justify-center hover:border-white border-transparent rounded-full border-1">
            {/* <Avatar size={64}>Logo</Avatar> */}
            <img src="logo.png" alt="" width={100} />
          </div>
          <div className="px-10">
            <Avatar shape="square" size={64}>
              Logo
            </Avatar>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mx-2">
          <div>
            <p className="hover:underline cursor-pointer font-bold">
              Abhishek Yadav
            </p>
            <p className="text-sm sm:text-md">Student</p>
          </div>
          <div>
            {/* <img className="h-14 rounded-4xl" src={profilelogo} alt="" /> */}
            <UserOutlined />
          </div>
          <div>
            <Dropdown menu={{ items: items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <i
                    className="fa-solid fa-gears fa-xl sm:fa-2xl"
                    style={{ color: "#fcfcfc" }}
                  ></i>
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
