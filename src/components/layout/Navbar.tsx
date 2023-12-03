import React, { useState } from "react";
import styled from "styled-components";
import {
  UserOutlined,
  BookOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    label: "예약",
    key: "book",
    icon: <BookOutlined />,
    children: [
      { label: <Link to="/book">예약조회</Link>, key: "bookList" },
      { label: "예약상세", key: "bookDetail" },
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
