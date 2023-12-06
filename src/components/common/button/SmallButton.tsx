import styled from "styled-components";

const SmallButton = ({ children }: { children: React.ReactNode }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default SmallButton;

const ButtonStyle = styled.button`
  display: flex;
  float: right;
  border: 1px solid #dedede;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #1677ff;
  color: white;
`;
