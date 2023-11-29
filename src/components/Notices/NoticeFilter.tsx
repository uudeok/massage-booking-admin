import styled from "styled-components";
import { Select } from "antd";
import { NOTICE_CATEGORY_KEYS } from "../../type/notice";

type TProps = {
  handleChange: (value: NOTICE_CATEGORY_KEYS) => void;
};

const NoticeFilter = ({ handleChange }: TProps) => {
  return (
    <LayoutStyle>
      <div>
        <span>구분 : </span>
        <Select
          defaultValue="ALL"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "ALL", label: "전체" },
            { value: "BUSINESS_TIME", label: "영업시간" },
            { value: "EVENT", label: "이벤트" },
            { value: "RULE", label: "운영방침" },
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
