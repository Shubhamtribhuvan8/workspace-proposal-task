import React from "react";
import { Divider, List } from "antd";

const data = [
  "Welcome",
  "Product Capabilities",
  "Customer Success Stories",
  "File Sharing",
  "Our Deck",
];

const Listes: React.FC = () => (
  <>
    <List
      size="small"
      header={
        <div style={{ fontSize: "16px", fontWeight: "bold" }}>Overview</div>
      }
      bordered
      dataSource={data}
      renderItem={(item: any) => <List.Item>{item}</List.Item>}
    />
  </>
);

export default Listes;
