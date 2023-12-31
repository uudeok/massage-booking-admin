import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ORDER_STATUS_TYPE_VALUES, TOrderType } from "../../type/order";
import { useGetOrderListQuery } from "../../api/order/orderApi";
import Paging from "../pagination/Paging";
import { useState } from "react";
import dayjs from "dayjs";
import Modal from "../common/modal/Modal";
import OrderStatusForm from "./OrderStatusForm";
import { useModal } from "../../hooks/useModal";
import { useDispatch } from "react-redux";
import { setOrderState } from "../../store/orderSlice";

const ORDER_PAGE_SIZE = 10;

const OrderTable = () => {
  const dispatch = useDispatch();
  const { open, openModal, closeModal } = useModal();
  const [page, setPage] = useState(1);
  const { data } = useGetOrderListQuery({
    pageNumber: page,
    pageSize: ORDER_PAGE_SIZE,
  });
  if (!data) return <span>loading...</span>;
  const list = data.orders;
  const meta = data.meta;

  const StatusHandler = (id: number, text: ORDER_STATUS_TYPE_VALUES) => {
    if (text === "요청중") {
      dispatch(setOrderState(id));
      openModal();
    }
    console.log(id, text);
  };

  const columns: ColumnsType<TOrderType> = [
    {
      title: "예약일자",
      dataIndex: "updatedAt",

      render: (updatedAt: string) => dayjs(updatedAt).format("YYYY-MM-DD"),
    },
    {
      title: "고객명",
      dataIndex: "",
    },
    {
      title: "성별",
      dataIndex: "id",
    },
    {
      title: "선택한 마사지",
      dataIndex: "item",

      filters: [
        { text: "건식마사지", value: "건식 마사지" },
        { text: "오일마사지", value: "오일 마사지" },
        { text: "체형교정 마사지", value: "체형교정 마사지" },
        { text: "청소년마사지", value: "청소년 마사지" },
        { text: "피부마사지", value: "피부 마사지" },
      ],
      onFilter: (value, record) => record.item === value,
    },
    {
      title: "예약 날짜",
      dataIndex: "startReservedAt",

      render: (startReservedAt: string) =>
        dayjs(startReservedAt).format("YYYY-MM-DD"),
    },
    {
      title: "예약 시간",
      dataIndex: ["startReservedAt", "endReservedAt"],

      render: (text, record) => (
        <>
          {dayjs(record.startReservedAt).format("HH:mm")} -
          {dayjs(record.endReservedAt).format("HH:mm")}
        </>
      ),
    },
    {
      title: "금액",
      dataIndex: "price",
    },
    {
      title: "예약처리상태",
      dataIndex: "displayStatus",
      filters: [
        { text: "요청중", value: "PENDING" },
        { text: "예약확정", value: "CONFIRM" },
        { text: "취소", value: "CANCEL" },
        { text: "완료", value: "COMPLETED" },
      ],
      onFilter: (value, record) => record.status === value,
      render: (text, record) => (
        <Button
          onClick={() => {
            StatusHandler(record.id, text);
          }}
        >
          {text}
        </Button>
      ),
    },
  ];

  const changePageHandler = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {open && (
        <Modal closeModal={closeModal}>
          <OrderStatusForm closeModal={closeModal} />
        </Modal>
      )}
      <Table columns={columns} dataSource={list} pagination={false} />
      <Paging
        page={page}
        count={meta.totalCount}
        pageSize={ORDER_PAGE_SIZE}
        changePageHandler={changePageHandler}
      />
    </>
  );
};

export default OrderTable;
