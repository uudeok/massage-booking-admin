import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import dayjs from "dayjs";

type TProps = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
};

const OrderCalendar = ({ selectedDate, setSelectedDate }: TProps) => {
  const addTwoWeeks = dayjs().add(2, "weeks").format();

  const changeDateHandler = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      minDate={new Date()}
      maxDate={new Date(addTwoWeeks)}
      selected={selectedDate}
      onChange={changeDateHandler}
      locale={ko}
      placeholderText="시작 시간"
      onKeyDown={(e) => e.preventDefault()}
    />
  );
};

export default OrderCalendar;
