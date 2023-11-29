import { TNotice, NOTICE_CATEGORY_KEYS } from "../../type/notice";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
  key: React.Key;
  title: string;
  category: NOTICE_CATEGORY_KEYS;
  writer: string;
  date: string;
  id: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "구분",
    dataIndex: "category",
  },
  {
    title: "제목",
    dataIndex: "title",
  },
  {
    title: "작성일",
    dataIndex: "date",
  },
  {
    title: "작성자",
    dataIndex: "writer",
  },
  {
    title: "조회수",
    dataIndex: "id",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const NoticeList = ({ noticeList }: { noticeList: DataType[] }) => {
  const data: DataType[] = noticeList.map((item) => item);

  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default NoticeList;
