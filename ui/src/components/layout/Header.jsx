import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import {
  BellOutlined,
  LogoutOutlined,
  SettingTwoTone,
} from "@ant-design/icons";
import logo from "../../assets/Icon/eduflow.png";
import { useAuthStore } from "../../store/auth.store";
import { cap1 } from "../../utils/utils";
import ProfileIcon from "../common/ProfileIcon";

export default function HeaderNav() {
  const { user, removeToken } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const headerMenu = [
    {
      key: "settings",
      icon: <SettingTwoTone />,
      label: <Link to="/profile">Settings</Link>,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: () => {
        console.log("Logging out");
        removeToken();
        navigate("/");
      },
    },
  ];

  return (
    <header className="bg-[#0069AB] w-full h-full">
      <div className="flex justify-between p-2">
        <div className="flex justify-center items-center pl-4">
          <div className="flex items-center justify-center ">
            <Link to="/dashboard">
              <img
                className="rounded-full w-50"
                src={logo}
                alt="EduFlow-logo"
              />
            </Link>
          </div>
          <div className="px-10">
            <div className="h-16 w-16 flex items-center justify-center bg-gray-400">
              Logo
            </div>
          </div>
          <div className="relative cursor-pointer">
            <BellOutlined className="text-white! text-4xl" />
            <span className="absolute -top-px -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-white text-[10px]">
              0
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 mx-2">
          <div>
            <p className="text-white hover:underline cursor-pointer">
              {user?.name || "Error"}
            </p>
            <p className="text-white text-sm sm:text-md">{cap1(user?.type)}</p>
          </div>
          <Dropdown
            menu={{ items: headerMenu }}
            placement="bottomRight"
            trigger={["click"]}
            getPopupContainer={(triggerNode) => triggerNode.parentElement}
          >
            <div className="flex items-center cursor-pointer select-none">
              {/* <ProfileIcon name={user?.name} photo_url={user?.photo_url} /> */}
            </div>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
