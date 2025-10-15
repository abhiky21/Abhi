import { Button, Result } from "antd";
import { PageContent } from ".";
import { SmileOutlined } from "@ant-design/icons";

export default function ComingSoon() {
  return (
    <PageContent>
      <div>
        <Result
          icon={<SmileOutlined />}
          title="Coming Soon"
          extra={<Button type="primary">Ok</Button>}
        />
      </div>
    </PageContent>
  );
}
