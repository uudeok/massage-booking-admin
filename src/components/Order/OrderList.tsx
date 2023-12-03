import OrderTable from "./Table";
import styled from "styled-components";

const OrderList = () => {
  return (
    <div>
      <HeaderStyle>
        <div>
          <span>날짜별 조회 </span>
        </div>
      </HeaderStyle>
      <OrderTable />
    </div>
  );
};

export default OrderList;

const HeaderStyle = styled.div`
  display: flex;
  padding: 1rem;
  text-align: center;
`;
