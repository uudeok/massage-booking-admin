import OrderCalendar from "./OrderCalendar";
import OrderTable from "./OrderTable";
import styled from "styled-components";
import { useState } from "react";

const OrderList = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div>
      <CalendarBoxStyle>
        <span>날짜별 조회 </span>
        <OrderCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </CalendarBoxStyle>

      <OrderTable />
    </div>
  );
};

export default OrderList;

const CalendarBoxStyle = styled.div`
  display: flex;
  text-align: center;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`;
