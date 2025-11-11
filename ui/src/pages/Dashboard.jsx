import { Button, Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { siderMenuItems } from "../assets/menuItems.assets";
const { Header, Sider, Content } = Layout;
export default function Dashboard() {
  const [collasped, setCollasped] = useState(false);

  return (
    <div className="mt-4">
      <Layout>
        {/* Side Bar */}
        <Sider theme="light" trigger={null} collapsible collapsed={collasped}>
          <div className="flex justify-end">
            <Button
              type="text"
              icon={
                <div
                  style={{
                    transition: "transform 0.5s ease",
                    transform: `rotate(${collasped ? 180 : 0}deg)`,
                  }}
                >
                  {collasped ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
              }
              onClick={() => setCollasped(!collasped)}
            >
              Menu
            </Button>
          </div>
          <Menu items={siderMenuItems} />
        </Sider>

        {/* Main Content */}
        <Layout>
          <Header className="flex items-center px-2 bg-white!">Content Header</Header>

          <Content></Content>
        </Layout>
      </Layout>
    </div>
  );
}
