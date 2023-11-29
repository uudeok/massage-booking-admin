import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ContainerStyle>
      <LogoStyle>
        <Link to="/">자연치유 쉼</Link>
      </LogoStyle>
    </ContainerStyle>
  );
};

export default Header;

const ContainerStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid lightgrey;
  align-items: center;
`;

const LogoStyle = styled.h1`
  font-size: 2rem;
  font-family: "GmarketSansMedium";
  height: 100%;
  font-weight: bold;
  padding: 1rem;
  display: flex;
  align-items: center;
`;
