import OrderTable from "./OrderTable";
import styled from "styled-components";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import dayjs from "dayjs";

const OrderList = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const addTwoWeeks = dayjs().add(2, "weeks").format();

  const changeDateHandler = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <HeaderStyle>
        <span>날짜별 조회 </span>
        <DatePicker
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          maxDate={new Date(addTwoWeeks)}
          selected={selectedDate}
          onChange={changeDateHandler}
          locale={ko}
          placeholderText="시작 시간"
          onKeyDown={(e) => e.preventDefault()}
          dateFormatCalendar="yyyy년 MM월"
        />
      </HeaderStyle>

      <OrderTable />
    </>
  );
};

export default OrderList;

const HeaderStyle = styled.div`
  display: flex;
  text-align: center;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`;
