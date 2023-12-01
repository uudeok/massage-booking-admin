import React from "react";
import { Breadcrumb, Layout } from "antd";
import Navbar from "./components/layout/Navbar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <HeaderStyle>
        <LogoStyle>자연치유 쉼</LogoStyle>
      </HeaderStyle>
      <Layout>
        <SiderStyle>
          <Navbar />
        </SiderStyle>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <ContentStyle>
            <Outlet />
          </ContentStyle>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;

const HeaderStyle = styled(Header)`
  display: flex;
  align-items: center;
`;

const SiderStyle = styled(Sider)`
  width: 200;
  background-color: white;
  height: 100%;
`;

const LogoStyle = styled.div`
  color: white;
`;

const ContentStyle = styled(Content)`
  padding: 24;
  margin: 0;
  min-height: 280;
  background-color: white;
`;
