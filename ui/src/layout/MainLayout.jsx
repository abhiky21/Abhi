import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import { useState } from "react";
import { siderMenuItems } from "../assets/menuItems.assets";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { DynamicBreadcrumb } from "../components/common";
import HeaderNav from "../components/layout/Header";

const { Header, Sider, Content } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <HeaderNav />
      <Layout style={{ height: "100vh" }}>
        {/* Sidebar */}
        <Sider theme="light" collapsible collapsed={collapsed} trigger={null}>
          <div className="flex justify-end">
            <Button
              type="text"
              icon={
                <div
                  style={{
                    transition: "transform 0.5s ease",
                    transform: `rotate(${collapsed ? 180 : 0}deg)`,
                  }}
                >
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
              }
              onClick={() => setCollapsed(!collapsed)}
            >
              Menu
            </Button>
          </div>

          <Menu
            mode="inline"
            defaultSelectedKeys={["/dashboard"]}
            items={siderMenuItems}
            onClick={(item) => navigate(item.key)}
          />
        </Sider>

        {/* Main area */}
        <Layout>
          {/* Top header */}
          <Header className="flex items-center px-2 bg-white! h-10">
            <DynamicBreadcrumb />
          </Header>

          {/* Routed page content */}
          <Content className="p-4">
            <Outlet /> {/* <<< All pages render here */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
