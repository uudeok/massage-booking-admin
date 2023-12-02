import { useGetNoticeDetailQuery } from "../../api/notice/noticeApi";
import { useParams } from "react-router-dom";
import { Descriptions, DescriptionsProps, Button } from "antd";
import dayjs from "dayjs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { NOTICE_CATEGORIES } from "../../const/notice";

const NoticeDetail = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [activation, setActivation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { id } = useParams();
  const { data } = useGetNoticeDetailQuery(Number(id));
  if (!data) return <span>Loading...</span>;

  const changeCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const borderedItems: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "작성자",
      children: data.writer,
    },
    {
      key: "2",
      label: "구분",
      children: activation ? (
        <select onChange={changeCategoryHandler}>
          {NOTICE_CATEGORIES.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
      ) : (
        data.displayCategory
      ),
    },
    {
      key: "3",
      label: "조회수",
      children: data.viewCount,
    },
    {
      key: "4",
      label: "제목",
      span: 2,
      children: activation ? <input type="text" ref={inputRef} /> : data.title,
    },
    {
      key: "5",
      label: "작성일",
      children: dayjs(data.createdAt).format("YYYY-MM-DD"),
    },
    {
      key: "7",
      label: "내용",
      children: data.content,
    },
  ];

  const changeInputHandler = () => {
    setActivation((prev) => !prev);
  };

  const updateInputHandler = (e: React.MouseEvent<HTMLElement>) => {
    console.log(inputRef.current?.value);
    console.log(selectedCategory);
  };

  return (
    <div>
      <Descriptions
        bordered
        extra={
          <ButtonBoxStyle>
            <Button type="link" onClick={() => navigate("..")}>
              뒤로가기
            </Button>
            {activation ? (
              <Button type="primary" onClick={updateInputHandler}>
                저장
              </Button>
            ) : (
              <Button type="primary" onClick={changeInputHandler}>
                수정
              </Button>
            )}

            <Button type="primary">삭제</Button>
          </ButtonBoxStyle>
        }
        items={borderedItems}
      />
    </div>
  );
};

export default NoticeDetail;

const ButtonBoxStyle = styled.div`
  display: flex;
  gap: 1rem;
`;
