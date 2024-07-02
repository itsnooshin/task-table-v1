"use client";

import { CopyOutlined } from "@ant-design/icons";
import { Table } from "antd";
import React from "react";
import styles from "../../src/app/page.module.css";

const data = [
  {
    id: 1,
    amount: 10000,
    trackId: 142513723,
    status: 0,
    paidAt: "1399/01/22-10:53:50",
    cardNumber: "585983******8890",
  },
  {
    id: 2,
    amount: 15000,
    trackId: 242513723,
    status: 1,
    paidAt: "1399/02/22-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 3,
    amount: 75000,
    trackId: 352513723,
    status: 1,
    paidAt: "1399/03/22-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 4,
    amount: 65000,
    trackId: 442533723,
    status: 1,
    paidAt: "1400/04/22-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 5,
    amount: 35000,
    trackId: 542513523,
    status: 1,
    paidAt: "1398/05/23-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 6,
    amount: 50000,
    trackId: 642523723,
    status: 1,
    paidAt: "1398/06/24-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 7,
    amount: 20000,
    trackId: 742513723,
    status: 1,
    paidAt: "1398/07/25-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 8,
    amount: 45000,
    trackId: 842513723,
    status: 1,
    paidAt: "1398/08/26-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 9,
    amount: 30000,
    trackId: 942513723,
    status: 1,
    paidAt: "1398/09/27-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 10,
    amount: 25000,
    trackId: 1042513723,
    status: 1,
    paidAt: "1398/10/04-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 11,
    amount: 80000,
    trackId: 1142513723,
    status: 1,
    paidAt: "1397/11/29-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 12,
    amount: 60000,
    trackId: 1242513723,
    status: 1,
    paidAt: "1397/12/30-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 13,
    amount: 55000,
    trackId: 1342513723,
    status: 1,
    paidAt: "1401/01/01-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 14,
    amount: 47000,
    trackId: 1442513723,
    status: 1,
    paidAt: "1401/02/02-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 15,
    amount: 52000,
    trackId: 1542513723,
    status: 1,
    paidAt: "1401/03/03-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 16,
    amount: 42000,
    trackId: 1642513723,
    status: 1,
    paidAt: "1400/04/04-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 17,
    amount: 67000,
    trackId: 1742513723,
    status: 1,
    paidAt: "1396/05/05-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 18,
    amount: 73000,
    trackId: 1842513723,
    status: 1,
    paidAt: "1396/06/06-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 19,
    amount: 31000,
    trackId: 1942513723,
    status: 1,
    paidAt: "1396/07/07-10:54:50",
    cardNumber: "585983******8890",
  },
  {
    id: 20,
    amount: 28000,
    trackId: 2042513723,
    status: 1,
    paidAt: "1396/08/08-10:54:50",
    cardNumber: "585983******8890",
  },
];

const columns = [
  {
    title: "شماره تراکنش",
    dataIndex: "trackId",
    key: "trackId",
    render: (text: string) => (
      <span className="numeric-font" style={{ display: "flex", gap: "5px" }}>
        {text}
        <CopyOutlined style={{ color: "#3D3ADD" }} />
      </span>
    ),
  },
  {
    title: "وضعیت پرداخت",
    dataIndex: "status",
    key: "status",
    render: (status: number) => (
      <span
        className="numeric-font"
        style={{ display: "flex", alignItems: "center", gap: "3px" }}
      >
        <p
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: status === 1 ? "#72C23F" : "#d90429",
            display: "block",
          }}
        ></p>
        {status === 1 ? "پرداخت موفق" : "پرداخت ناموفق"}
      </span>
    ),
  },
  {
    title: "تاریخ پرداخت",
    dataIndex: "paidAt",
    key: "paidAt",
    render: (text: string) => <span className="numeric-font">{text}</span>,
  },
  {
    title: "مبلغ",
    dataIndex: "amount",
    key: "amount",
    render: (text: string) => (
      <span className="numeric-font">{text.toLocaleString()}ریال</span>
    ),
  },
  {
    title: "شماره کارت",
    dataIndex: "cardNumber",
    key: "cardNumber",
    render: (text: string) => (
      <span
        className="numeric-font"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        {text}
        {/* <IconBank /> */}
      </span>
    ),
  },
];

export default function DataTable() {
  return (
    <div className={styles.Container}>
      <Table dataSource={data} columns={columns} />
    </div>
  );
}
