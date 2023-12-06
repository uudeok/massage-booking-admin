import styled from "styled-components";
import { useEffect } from "react";

type TProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

const Modal = ({ children, closeModal }: TProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <BackDropStyle onClick={() => closeModal()} />
      <ModalStyle>{children}</ModalStyle>
    </>
  );
};

export default Modal;

const BackDropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 10%;
  justify-content: center;
  align-items: center;
  left: calc(50% - 10rem);
  width: 26rem;
  padding: 1.5rem;
  /* border-radius: 14px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  background-color: white;
  height: 19rem;
`;
