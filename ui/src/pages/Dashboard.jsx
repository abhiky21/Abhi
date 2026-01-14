/* eslint-disable no-unused-vars */
import { Spin, Table } from "antd";
import * as usrServ from "../services/user.service.js";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const cols = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Class", dataIndex: "class_name" },
  ];

  const listStudent = async () => {
    setLoading(true);
    const { success, result } = await usrServ.listStudent();
    if (success) {
      setData(result);
      setLoading(false);
    }
  };

  console.log(loading);

  useEffect(() => {
    listStudent();
  }, []);

  return (
    <Spin spinning={loading}>
      <Table columns={cols} dataSource={data}></Table>
    </Spin>
  );
}
