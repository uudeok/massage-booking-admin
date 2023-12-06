import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import styled from "styled-components";
import SmallButton from "../common/button/SmallButton";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "오픈시간",
    children: "09:00",
  },
  {
    key: "2",
    label: "마감시간",
    children: "21:00",
  },
  {
    key: "3",
    label: "휴일",
    children: "일요일",
  },
];

const OrderManage = () => {
  return (
    <>
      <SmallButton>수정</SmallButton>
      <Descriptions
        title="영업 관리"
        layout="vertical"
        bordered
        items={items}
      />
    </>
  );
};

export default OrderManage;
