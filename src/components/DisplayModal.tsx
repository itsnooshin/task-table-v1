import React, { useState } from "react";
import { InputNumber, message } from "antd";
import { Button, Form, Input, Modal, Select, Typography, Tabs } from "antd";
import TextArea from "antd/es/input/TextArea";
import type { SelectProps } from "antd";

const DisplayModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    try {
      await form.validateFields();
      setLoading(true);
      setOpen(false);
      setTimeout(() => {
        setLoading(false);
        messageApi.success("ثبت درخواست تسویه با موفقیت انجام شد");
        form.resetFields();
      }, 1000);
    } catch (errorInfo) {
      messageApi.error('ثبت درخواست تسویه با ارور مواجه شد ')
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const options: SelectProps["options"] = [
    { value: "کیف پول اصلی", label: "کیف پول اصلی" },
    { value: "کیف پول اختیاری", label: "کیف پول اختیاری" },
    { value: "کیف پول تسویه", label: "کیف پول تسویه" },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        تسویه حساب پول{" "}
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
              paddingBottom: "1.5rem",
              paddingTop: "1rem",
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
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            style={{ marginRight: "10px", marginBottom: "20px" }}
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
              borderBottom: "1px solid #f0f0f0",
              marginBottom: "1.5rem",
            }}
          >
            <Typography style={{ color: "#3D3ADD", fontSize: "1.6rem" }}>
              15,000
            </Typography>
            <Typography style={{ color: "#3D3ADD", fontSize: "0.7rem" }}>
              ریال
            </Typography>
          </div>
          <Tabs
            defaultActiveKey="1"
            type="card"
            style={{ border: "none", marginTop: "1rem" }}
            tabBarGutter={0}
          >
            <Tabs.TabPane tab="به حساب" key="1">
              <Form
                form={form}
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
              >
                <Form.Item
                  name="destination"
                  label="مقصد تسویه"
                  rules={[
                    {
                      required: true,
                      message: "لطفا یک ایتم را انتخاب کنید",
                    },
                  ]}
                >
                  <Select
                    style={{ width: "100%" }}
                    placeholder="انتخاب شماره شبا یا ورود شبا جدید"
                    options={options}
                  />
                </Form.Item>
                <Form.Item
                  name="amount"
                  label="مبلغ تسویه"
                  rules={[
                    {
                      required: true,
                      message: "لطفا مبلغ تسویه رو وارد کنید",
                    },
                  ]}
                >
                  <InputNumber
                    min={0}
                    size="large"
                    style={{ width: "100%" }}
                    formatter={(value) =>
                      `${value}`.replace(
                        new RegExp(/\B(?=(\d{3})+(?!\d))/g),
                        ","
                      )
                    }
                    suffix="ریال"
                  />
                </Form.Item>
                <Form.Item name="description" label=" توضیحات (بابت)">
                  <TextArea maxLength={100} />
                </Form.Item>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane tab="به کیف پول" key="2">
              <Form
                form={form}
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
              >
                <Form.Item
                  name="destinationWallet"
                  label="مقصد تسویه"
                  rules={[
                    {
                      required: true,
                      message: "لطفا یک ایتم را انتخاب کنید",
                    },
                  ]}
                >
                  <Select
                    style={{ width: "100%" }}
                    placeholder="انتخاب شماره شبا یا ورود شبا جدید"
                    options={options}
                  />
                </Form.Item>
                <Form.Item
                  name="amountWallet"
                  label="مبلغ تسویه"
                  rules={[
                    {
                      required: true,
                      message: "لطفا مبلغ تسویه رو وارد کنید",
                    },
                  ]}
                >
                  <Input suffix="ریال" type="number" inputMode="numeric" />
                </Form.Item>
                <Form.Item
                  name="descriptionWallet"
                  label=" توضیحات (بابت)"
                  rules={[
                    {
                      required: true,
                      message: "لطفافیلد توضیحات رو پر کنید",
                    },
                  ]}
                >
                  <TextArea maxLength={100} />
                </Form.Item>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </Modal>
      {contextHolder}
    </>
  );
};

export default DisplayModal;
