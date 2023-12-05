import { TNotice, NOTICE_CATEGORY_KEYS } from "../../type/notice";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useGetNoticeListQuery } from "../../api/notice/noticeApi";
import NoticeFilter from "./NoticeFilter";
import { useState } from "react";
import styled from "styled-components";
import Paging from "../pagination/Paging";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const NOTICE_PAGE_SIZE = 5;

const columns: ColumnsType<TNotice> = [
  {
    title: "구분",
    dataIndex: "displayCategory",
  },
  {
    title: "제목",
    dataIndex: "title",
    render: (text, record) => <Link to={"/notice/" + record.id}>{text}</Link>,
  },
  {
    title: "작성일",
    dataIndex: "createdAt",
    render: (text, record) => dayjs(record.createdAt).format("YYYY-MM-DD"),
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

const NoticeList = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<NOTICE_CATEGORY_KEYS>("ALL");
  const [page, setPage] = useState(1);

  const { data } = useGetNoticeListQuery({
    pageNumber: page,
    pageSize: NOTICE_PAGE_SIZE,
    category: selectedCategory,
  });

  if (!data) return <span>로딩중</span>;

  const noticeList = data.notices;
  const meta = data.meta;

  const handleChange = (value: NOTICE_CATEGORY_KEYS) => {
    setSelectedCategory(value);
  };

  const changePageHandler = (page: number) => {
    setPage(page);
  };

  // const list: TNotice[] = noticeList.map((item) => item);

  return (
    <LayoutStyle>
      <NoticeFilter handleChange={handleChange} />
      <Table
        columns={columns}
        dataSource={noticeList}
        rowKey={(record) => record.id}
        pagination={false}
      />
      <Paging
        page={page}
        count={meta.totalCount}
        pageSize={NOTICE_PAGE_SIZE}
        changePageHandler={changePageHandler}
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
