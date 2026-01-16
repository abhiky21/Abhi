import { Button, Card, Input, Select, Space, Spin, Table } from "antd";
import * as usrServ from "../services/user.service.js";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

export default function SRecords() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [classValue, setClassValue] = useState("all")

  const cols = [
    { title: "Roll No.", dataIndex: "roll_number" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Class", dataIndex: "class_name" },
    {
      title: "",
      dataIndex: "id",
      width: 86,
      render: (id, row) => (
        <div className="text-center opacity-0 group-hover:opacity-100 transition">
          <Space.Compact size="small">
            <Button>
              <EditOutlined />
            </Button>
            <Button>
              <DeleteOutlined onClick={() => del(id)}/>
            </Button>
          </Space.Compact>
        </div>
      ),
    },
  ];

  const del = async (id) => {
    // setLoading(true)
    const {success} = await usrServ.del(id)
    if(success) {
      // setLoading(false)
      console.log(success);
      
    }
    
  }

  const listStudent = async () => {
    setLoading(true);
    const { success, result } = await usrServ.listStudent();
    if (success) {
      setData(result);
      setLoading(false);
      console.log(result);
    }
  };

  console.log(loading);

  useEffect(() => {
    listStudent();
  }, []);
  const selectClass = [
    { value: null, label: "All Classes"},
    { value: 1, label: "Class 1" },
    { value: 2, label: "Class 2" },
    { value: 3, label: "Class 3" },
    { value: 4, label: "Class 4" },
    { value: 5, label: "Class 5" },
    { value: 6, label: "Class 6" },
    { value: 7, label: "Class 7" },
    { value: 8, label: "Class 8" },
    { value: 9, label: "Class 9" },
    { value: 10, label: "Class 10" }
  ];

  return (
    <Spin spinning={loading}>
      <Card>

        <div className="flex items-center justify-between p-2 border-b">
          <div>

          <Input.Search
            className="w-60! "
            placeholder="Keywords..."
            allowClear
            />
          <Select className="w-60!" options={selectClass} allowClear value={classValue === "all" ? undefined: classValue} onChange={setClassValue} />
            </div>
            <Button type="primary">
              <PlusOutlined /> Add 

            </Button>
        </div>
        <Table rowClassName={() => "group"} size="small" columns={cols} dataSource={data}></Table>
      </Card>
    </Spin>

  );
}
