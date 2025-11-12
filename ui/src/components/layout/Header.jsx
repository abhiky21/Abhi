import { Link } from "react-router-dom";
import { Avatar, Button, Dropdown, Space } from "antd";
import { DownOutlined, SettingOutlined, SmileFilled } from "@ant-design/icons";
import logo from "../../assets/Icon/eduflow.png";
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
            {/* <img className="h-14 rounded-4xl" src={} alt="" /> */}
            <Avatar size="large" icon={<SmileFilled />} />
          </div>
          <div>
            <Dropdown menu={headerMenu} trigger={["click"]}>
              <Button
                type="text"
                onClick={(e) => e.preventDefault()}
                icon={<SettingOutlined style={{ fontSize: 22, color: "#fcfcfc" }} />}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
