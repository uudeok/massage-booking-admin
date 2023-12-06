import styled from "styled-components";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { getOrderState } from "../../store/orderSlice";
import { useState } from "react";

type TProps = {
  closeModal: () => void;
};

const OrderStatusForm = ({ closeModal }: TProps) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [message, setMessage] = useState("");
  const orderId = useSelector(getOrderState);

  const updateOrderStatusHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isConfirm) {
      console.log("예약확정");
    } else {
      if (!selectedReason) {
        return setMessage("취소사유는 필수입니다");
      }
      console.log("예약취소", selectedReason);
    }
  };

  const confirmOrderHandler = () => {
    setIsCancel(false);
    setIsConfirm((prev) => !prev);
  };

  const cancelOrderHandler = () => {
    setIsConfirm(false);
    setIsCancel((prev) => !prev);
  };

  const cancelReasonHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedReason(e.target.value);
  };

  return (
    <ContainerStyle>
      <TitleStyle>
        <InfoCircleTwoTone />
        <span>예악을 수락하시겠습니까?</span>
      </TitleStyle>
      <FormStyle>
        <ConfirmButtonStyle
          onClick={confirmOrderHandler}
          $isConfirm={isConfirm}
        >
          예악확정
        </ConfirmButtonStyle>
        <CancelButtonStyle onClick={cancelOrderHandler} $isCancel={isCancel}>
          예약취소
        </CancelButtonStyle>
        <SelectStyle
          onChange={cancelReasonHandler}
          defaultValue="취소사유를 선택하세요"
        >
          <option disabled hidden value="취소사유를 선택하세요">
            취소사유를 선택하세요
          </option>
          <option value="사유1">사유1</option>
          <option value="사유2">사유2</option>
          <option value="사유3">사유3</option>
        </SelectStyle>
        {message && <MessageStyle>{message}</MessageStyle>}
        <ButtonBoxStyle>
          <ButtonStyle onClick={() => closeModal()}>취소</ButtonStyle>
          <ButtonStyle onClick={updateOrderStatusHandler}>확인</ButtonStyle>
        </ButtonBoxStyle>
      </FormStyle>
    </ContainerStyle>
  );
};

export default OrderStatusForm;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem;
`;

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ButtonBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

const ConfirmButtonStyle = styled.button<{ $isConfirm: boolean }>`
  border: 1px solid #dedede;
  padding: 0.5rem;
  border-radius: 10px;

  &:hover {
    border: 1px solid #1677ff;
  }
  background-color: ${({ $isConfirm }) => ($isConfirm ? "#1677ff" : "white")};
  color: ${({ $isConfirm }) => ($isConfirm ? "white" : "black")};
`;

const CancelButtonStyle = styled.button<{ $isCancel: boolean }>`
  border: 1px solid #dedede;
  padding: 0.5rem;
  border-radius: 10px;

  &:hover {
    border: 1px solid #1677ff;
  }
  background-color: ${({ $isCancel }) => ($isCancel ? "#1677ff" : "white")};
  color: ${({ $isCancel }) => ($isCancel ? "white" : "black")};
`;

const ButtonStyle = styled.button`
  border: 1px solid #dedede;
  padding: 0.5rem;
  border-radius: 10px;

  &:hover {
    border: 1px solid #1677ff;
  }
`;

const SelectStyle = styled.select`
  padding: 0.3rem;
`;

const MessageStyle = styled.span`
  color: orangered;
`;
