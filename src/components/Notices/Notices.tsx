import NoticeFilter from "./NoticeFilter";
import NoticeList from "./NoticeList";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Notices = () => {
  const [noticeList, setNoticeList] = useState([]);

  const fetchNoticeList = async () => {
    const response = await axios.get("http://localhost:4000/notices");
    return setNoticeList(response.data);
  };

  console.log(noticeList);

  useEffect(() => {
    fetchNoticeList();
  }, []);

  return (
    <LayoutStyle>
      <NoticeFilter />
      <NoticeList noticeList={noticeList} />
    </LayoutStyle>
  );
};

export default Notices;

const LayoutStyle = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  padding: 1rem;
`;
