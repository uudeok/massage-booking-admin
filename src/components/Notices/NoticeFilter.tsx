import styled from "styled-components";
import { Select } from "antd";

const NoticeFilter = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <LayoutStyle>
      <div>
        <span>구분 : </span>
        <Select
          defaultValue="전체"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "ALL", label: "전체" },
            { value: "BUSINESS_TIME", label: "영업시간" },
            { value: "EVENTS", label: "이벤트" },
            { value: "RULES", label: "운영방침" },
            { value: "ETC", label: "기타" },
          ]}
        />
      </div>
    </LayoutStyle>
  );
};

export default NoticeFilter;

const LayoutStyle = styled.div`
  /* border: 1px solid black; */
  border-bottom: 1px solid lightgrey;
  height: 10rem;
`;
