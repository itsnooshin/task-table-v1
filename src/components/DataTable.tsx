"use client";

import React, { useRef, useState } from "react";
import { SearchOutlined, CopyOutlined } from "@ant-design/icons";
import { Table, Input, Button, Space, Typography, InputRef } from "antd";
import Highlighter from "react-highlight-words";
import styles from "@/app/page.module.css";
import { DisplayPersianDate } from "@/utilities/displayPersianDate";
import IconBank from "./IconBank";
import { ColumnsType, ColumnType } from "antd/es/table";
import DisplayModal from "./FormModal";
import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
} from "antd/es/table/interface";

interface DataType {
  key: string;
  trackId: number;
  status: number;
  paidAt: string;
  amount: number;
  cardNumber: string;
}

const data: DataType[] = [
  {
    key: "1",
    trackId: 142513723,
    status: 0,
    paidAt: "1399/01/22-10:53:50",
    amount: 10000,
    cardNumber: "585983******8890",
  },
  {
    key: "2",
    trackId: 242513723,
    status: 1,
    paidAt: "1399/02/22-10:54:50",
    amount: 15000,
    cardNumber: "585983******8890",
  },
  {
    key: "3",
    trackId: 352513723,
    status: 1,
    paidAt: "1399/03/22-10:54:50",
    amount: 75000,
    cardNumber: "585983******8890",
  },
  {
    key: "4",
    trackId: 442533723,
    status: 1,
    paidAt: "1400/04/22-10:54:50",
    amount: 65000,
    cardNumber: "585983******8890",
  },
  {
    key: "5",
    trackId: 542513523,
    status: 1,
    paidAt: "1398/05/23-10:54:50",
    amount: 35000,
    cardNumber: "585983******8890",
  },
  {
    key: "6",
    trackId: 642523723,
    status: 1,
    paidAt: "1398/06/24-10:54:50",
    amount: 50000,
    cardNumber: "1234******545183",
  },
  {
    key: "7",
    trackId: 742513723,
    status: 1,
    paidAt: "1398/07/25-10:54:50",
    amount: 20000,
    cardNumber: "59100******545183",
  },
  {
    key: "8",
    trackId: 842513723,
    status: 1,
    paidAt: "1398/08/26-10:54:50",
    amount: 45000,
    cardNumber: "585983******8890",
  },
  {
    key: "9",
    trackId: 942513723,
    status: 1,
    paidAt: "1398/09/27-10:54:50",
    amount: 30000,
    cardNumber: "585983******8890",
  },
  {
    key: "10",
    trackId: 1042513723,
    status: 1,
    paidAt: "1398/10/04-10:54:50",
    amount: 25000,
    cardNumber: "585983******8890",
  },
  {
    key: "11",
    trackId: 1142513723,
    status: 1,
    paidAt: "1397/11/29-10:54:50",
    amount: 80000,
    cardNumber: "585983******8890",
  },
  {
    key: "12",
    trackId: 1242513723,
    status: 1,
    paidAt: "1397/12/30-10:54:50",
    amount: 60000,
    cardNumber: "585983******8890",
  },
  {
    key: "13",
    trackId: 1342513723,
    status: 1,
    paidAt: "1401/01/01-10:54:50",
    amount: 55000,
    cardNumber: "585983******8890",
  },
  {
    key: "14",
    trackId: 1442513723,
    status: 1,
    paidAt: "1401/02/02-10:54:50",
    amount: 47000,
    cardNumber: "585983******8890",
  },
  {
    key: "15",
    trackId: 1542513723,
    status: 1,
    paidAt: "1401/03/03-10:54:50",
    amount: 52000,
    cardNumber: "585983******8890",
  },
  {
    key: "16",
    trackId: 1642513723,
    status: 1,
    paidAt: "1400/04/04-10:54:50",
    amount: 42000,
    cardNumber: "585983******8890",
  },
  {
    key: "17",
    trackId: 1742513723,
    status: 1,
    paidAt: "1396/05/05-10:54:50",
    amount: 67000,
    cardNumber: "585983******8890",
  },
  {
    key: "18",
    trackId: 1842513723,
    status: 1,
    paidAt: "1396/06/06-10:54:50",
    amount: 73000,
    cardNumber: "585983******8890",
  },
  {
    key: "19",
    trackId: 1942513723,
    status: 1,
    paidAt: "1396/07/07-10:54:50",
    amount: 31000,
    cardNumber: "585983******8890",
  },
  {
    key: "20",
    trackId: 2042513723,
    status: 1,
    paidAt: "1396/08/08-10:54:50",
    amount: 28000,
    cardNumber: "585983******8890",
  },
];

const DataTable: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState<keyof DataType | "">("");
  const [filteredDataCount, setFilteredDataCount] = useState(data.length);
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: React.Key[],
    confirm: (param?: any) => void,
    dataIndex: keyof DataType
  ) => {
    confirm();
    setSearchText(selectedKeys[0] as string);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: keyof DataType
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`سرچ ${
            dataIndex === "trackId" ? "شماره تراکنش" : "شماره کارت"
          }`}
          value={selectedKeys[0] as string}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="large"
          >
            سرچ
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="large"
          >
            ریست
          </Button>
          <Button type="link" size="small" onClick={() => close()}>
            بستن
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined
        style={{
          backgroundColor: "#1677ff",
          color: filtered ? "#fff" : "#fff",
          fontSize: "20px",
          padding: "9px",
          borderRadius: "8px",
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toString().toLowerCase()),
    onFilterDropdownOpenChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "شماره تراکنش",
      dataIndex: "trackId",
      key: "trackId",
      ...getColumnSearchProps("trackId"),
      render: (text: number) => (
        <span className={styles.copyIcon}>
          {text.toString()}
          <CopyOutlined style={{ color: "#3D3ADD" }} />
        </span>
      ),
    },
    {
      title: "وضعیت پرداخت",
      dataIndex: "status",
      key: "status",
      render: (status: number) => (
        <span className={styles.status}>
          <p
            className={`${styles.statusIndicator} ${
              status === 1 ? styles.active : styles.inactive
            }`}
          ></p>
          {status === 1 ? "پرداخت موفق" : "پرداخت ناموفق"}
        </span>
      ),
    },
    {
      title: "تاریخ پرداخت",
      dataIndex: "paidAt",
      key: "paidAt",
      render: (text: string) => (
        <span className={styles.paidAt}>{DisplayPersianDate(text)}</span>
      ),
    },
    {
      title: "مبلغ",
      dataIndex: "amount",
      key: "amount",
      render: (text: number) => (
        <span className="numeric-font">{text.toLocaleString()} ریال</span>
      ),
    },
    {
      title: "شماره کارت",
      dataIndex: "cardNumber",
      key: "cardNumber",
      ...getColumnSearchProps("cardNumber"),
      render: (text: string) => (
        <span
          className="numeric-font"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          {text}
          <IconBank width="40" height="40" />
        </span>
      ),
    },
  ];

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<DataType> | SorterResult<DataType>[],
    extra: TableCurrentDataSource<DataType>
  ) => {
    setFilteredDataCount(extra.currentDataSource.length);
  };

  return (
    <div className={styles.Container}>
      <Table
        rowClassName={(record, index) => (index % 2 === 1 ? "even-row" : "")}
        pagination={false}
        dataSource={data}
        columns={columns}
        className={styles.TableFont}
        onChange={handleTableChange}
      />
      <div className={styles.containerModal}>
        <Typography className={styles.result}>
          تعداد نتایج : {filteredDataCount}
        </Typography>
        <DisplayModal />
      </div>
    </div>
  );
};

export default DataTable;
