import React, { useState } from "react";
import { Button, Divider, Modal, Typography } from "antd";
import { Tabs } from "antd";
import FormItem from "antd/es/form/FormItem";
import FormTabs from "./FormTab";
const { Text } = Typography;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        open={open}
        title={
          <div
            style={{
              display: "flex",
              borderBottom: "2px solid #f0f0f0",
              padding: "10px",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Typography> تسویه کیف پول</Typography>
            <Typography style={{ fontSize: "0.9rem", fontWeight: 500 }}>
              {" "}
              اصلی زبپ
            </Typography>
          </div>
        }
        onOk={handleOk}
        // onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            style={{ marginRight: "10px" , marginBottom  :'20px' }}
          >
            انصراف
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
            style={{ marginLeft: "10px" }}
          >
            ثبت درخواست تسویه
          </Button>,
          ,
        ]}
      >
        <div
          style={{
            marginLeft: "1rem",
            marginRight: "1rem",
            borderBottom: "1px solid #f0f0f0 ",
          }}
        >
          <p>موجودی فعلی:</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: "6px",
            }}
          >
            <Typography style={{ color: "#3D3ADD", fontSize: "1.6rem" }}>
              15,000
            </Typography>
            <Typography style={{ color: "#3D3ADD", fontSize: "0.7rem" }}>
              ریال
            </Typography>
          </div>
          <FormTabs />
        </div>
      </Modal>
    </>
  );
};
export default App;
