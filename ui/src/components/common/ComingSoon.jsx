import { Button, Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export default function ComingSoon() {
  return (
    <div className="flex justify-center">
      <Result
        icon={<SmileOutlined />}
        title="Coming Soon"
        extra={<Button type="primary">Ok</Button>}
      />
    </div>
  );
}
