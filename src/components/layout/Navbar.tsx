import React, { useState } from "react";
import styled from "styled-components";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  BookOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import type { MenuProps, MenuTheme } from "antd";
import { Menu, Switch } from "antd";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
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
    children: [{ label: <Link to="/notice">공지사항</Link>, key: "notice" }],
  },
];

const App: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>("dark");
  const [current, setCurrent] = useState("1");

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <MenuBarStyle>
      <SwitchStyle
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />

      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </MenuBarStyle>
  );
};

export default App;

const MenuBarStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const SwitchStyle = styled(Switch)`
  width: 5rem;
  margin-top: 1rem;
`;
