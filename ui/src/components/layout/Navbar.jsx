import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { navBarMenuItems } from '../../assets/menuItems.assets.jsx';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const renderDropdown = (title, menu) => (
    <Dropdown menu={menu} trigger={['click']}>
      <button>
        {title} <DownOutlined />
      </button>
    </Dropdown>
  );

  return (
    <div className="h-10 w-full shadow-lg shadow-black/40 flex items-center px-8">
      <Space size="large" className="myBtnFont">
        {renderDropdown('Personal', navBarMenuItems.personal)}
        {renderDropdown('Academic Schedule', navBarMenuItems.schedule)}
        {renderDropdown('Academic Functions', navBarMenuItems.function)}
        {renderDropdown('Facilities', navBarMenuItems.facilities)}
        <Link to="fee-payment">Student Academic Fees Payment</Link>
      </Space>
    </div>
  );
}
