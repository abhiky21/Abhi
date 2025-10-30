import { Link } from "react-router-dom";
import { Avatar, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import profilelogo from "../../../Assets/profile.jpg";
import logo from "../../../Assets/eduflow.png";
import { headerMenu } from "../../assets/menuItems.assets";

export default function Header() {
  return (
    <header className="bg-[#0069AB] w-full h-full">
      <div className="flex justify-between p-2">
        <div className="flex justify-center items-center pl-4">
          <div className="flex items-center justify-center ">
            <Link to="/">
              <img className="rounded-full w-50" src={logo} alt="EduFlow-logo" />
            </Link>
          </div>
          <div className="px-10">
            <Avatar shape="square" size={64}>
              Logo
            </Avatar>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mx-2">
          <div>
            <p className="text-white hover:underline cursor-pointer">Abhishek Yadav</p>
            <p className="text-white text-sm sm:text-md">Student</p>
          </div>
          <div>
            <img className="h-14 rounded-4xl" src={profilelogo} alt="" />
          </div>
          <div>
            <Dropdown menu={headerMenu} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <i className="fa-solid fa-gears fa-xl sm:fa-2xl" style={{ color: "#fcfcfc" }}></i>
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
