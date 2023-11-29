import { TNotice, NOTICE_CATEGORY_KEYS } from "../../type/notice";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { useGetNoticeListQuery } from "../../api/notice/noticeApi";
import NoticeFilter from "./NoticeFilter";
import { useState } from "react";
import styled from "styled-components";

const NOTICE_PAGE_SIZE = 5;

const columns: ColumnsType<TNotice> = [
  {
    title: "구분",
    dataIndex: "displayCategory",
  },
  {
    title: "제목",
    dataIndex: "title",
  },
  {
    title: "작성일",
    dataIndex: "createdAt",
  },
  {
    title: "작성자",
    dataIndex: "writer",
  },
  {
    title: "조회수",
    dataIndex: "viewCount",
  },
];

const onChange: TableProps<TNotice>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const NoticeList = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<NOTICE_CATEGORY_KEYS>("ALL");

  const { data } = useGetNoticeListQuery({
    pageNumber: 1,
    pageSize: NOTICE_PAGE_SIZE,
    category: selectedCategory,
  });

  if (!data) return <span>로딩중</span>;

  const noticeList = data.notices;
  const meta = data.meta;

  const handleChange = (value: NOTICE_CATEGORY_KEYS) => {
    setSelectedCategory(value);
  };

  const list: TNotice[] = noticeList.map((item) => item);

  return (
    <LayoutStyle>
      <NoticeFilter handleChange={handleChange} />
      <Table
        columns={columns}
        dataSource={list}
        onChange={onChange}
        rowKey={(record) => record.id}
        pagination={false}
      />
    </LayoutStyle>
  );
};

export default NoticeList;

const LayoutStyle = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  padding: 1rem;
`;
