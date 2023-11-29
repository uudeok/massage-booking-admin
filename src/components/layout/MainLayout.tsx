import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <MainStyle>
        <Navbar />
        <Outlet />
      </MainStyle>
    </>
  );
};

export default MainLayout;

const MainStyle = styled.main`
  display: flex;
`;
