import React, { useState } from "react";
import styled from "styled-components";
import {
  UserOutlined,
  BookOutlined,
  NotificationOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    label: "예약",
    key: "order",
    icon: <BookOutlined />,
    children: [
      { label: <Link to="/order">예약조회</Link>, key: "orderList" },
      { label: <Link to="/order/detail">예약상세</Link>, key: "orderDetail" },
      {
        label: <Link to="/order/manage">예약관리</Link>,
        key: "orderManagement",
      },
    ],
  },
  {
    label: "고객",
    key: "customer",
    icon: <UserOutlined />,
    children: [
      { label: "고객리스트", key: "customerList" },
      { label: "고객상세조회", key: "customerDetail" },
    ],
  },
  {
    label: "프로그램",
    key: "program",
    icon: <UnorderedListOutlined />,
    children: [{ label: "프로그램 리스트", key: "programList" }],
  },
  {
    label: "공지사항",
    key: "notice",
    icon: <NotificationOutlined />,
    children: [
      { label: <Link to="/notice">공지사항</Link>, key: "noticeList" },
      { label: <Link to="/notice/new">공지 올리기</Link>, key: "newNotice" },
    ],
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <MenuBarStyle>
      <Menu
        onClick={onClick}
        style={{ width: 200 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </MenuBarStyle>
  );
};

export default Navbar;

const MenuBarStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
