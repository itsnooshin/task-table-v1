import React from "react";
import { Form, Input, Tabs } from "antd";
import type { InputNumberProps } from "antd";
import { InputNumber, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Flex } from "antd";
const { TextArea } = Input;
import { Select } from "antd";
import type { SelectProps } from "antd";

const options: SelectProps["options"] = [];
for (let i = 0; i < 5; i++) {
  options.push({
    value: i.toString(5) + i,
    label: i.toString(5) + i,
  });
}

const onChange: InputNumberProps["onChange"] = (value) => {
  console.log("changed", value);
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const FormTabs = () => (
  <Tabs
    defaultActiveKey="1"
    type="card"
    style={{ border: "none" }}
    tabBarStyle={{ border: "none" }}
    tabBarGutter={0}
    items={[
      {
        label: "به حساب",
        key: "1",
        children: (
          <Form name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item
              name="tags"
              label="مقصد تسویه"
              rules={[
                { required: true, message: "لطفا یک ایتم را انتخاب کنید" },
              ]}
            >
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="انتخاب شماره شبا یا ورود شبا جدید"
                onChange={handleChange}
                options={options}
              />
            </Form.Item>
            <Form.Item
              name="name"
              label="مبلغ تسویه"
              rules={[
                { required: true, message: "لطفا مبلغ تسویه رو وارد کنید" },
              ]}
            >
              <Input suffix="ریال" />
            </Form.Item>
            <Form.Item
              name="name"
              label=" توضحیات (بابت)"
              rules={[
                { required: true, message: "لطفافیلد توضیحات رو پر کنید" },
              ]}
            >
              <TextArea maxLength={100} />
            </Form.Item>
          </Form>
        ),
      },
      {
        label: "به کیف پول",
        key: "2",
        children: (
          <Form name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item
              name="tags"
              label="مقصد تسویه"
              rules={[
                { required: true, message: "لطفا یک ایتم را انتخاب کنید" },
              ]}
            >
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="انتخاب شماره شبا یا ورود شبا جدید"
                onChange={handleChange}
                options={options}
              />
            </Form.Item>
            <Form.Item
              name="name"
              label="مبلغ تسویه"
              rules={[
                { required: true, message: "لطفا مبلغ تسویه رو وارد کنید" },
              ]}
            >
              <Input suffix="ریال" />
            </Form.Item>
            <Form.Item
              name="name"
              label=" توضحیات (بابت)"
              rules={[
                { required: true, message: "لطفافیلد توضیحات رو پر کنید" },
              ]}
            >
              <TextArea maxLength={100} />
            </Form.Item>
          </Form>
        ),
      },
    ]}
  />
);

export default FormTabs;