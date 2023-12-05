import { ORDER_STATUS } from "../../const/orders";
import { ITEM_TYPE_VALUES } from "../items";

export type valueOf<T> = T[keyof T];
export type ORDER_STATUS_TYPE = typeof ORDER_STATUS;
export type ORDER_STATUS_TYPE_KEYS = keyof ORDER_STATUS_TYPE;
export type ORDER_STATUS_TYPE_VALUES = valueOf<ORDER_STATUS_TYPE>;

export type TOrderType = {
  id: number;
  price: number;
  item: ITEM_TYPE_VALUES;
  createdAt: string;
  status: ORDER_STATUS_TYPE_KEYS;
  displayStatus: ORDER_STATUS_TYPE_VALUES;
  startReservedAt: string;
  endReservedAt: string;
  userId: number;
  updatedAt: string;
};

export type TMyOrderMetaType = {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalCount: number;
};

export type MyOrderType = {
  orders: TOrderType[];
  meta: TMyOrderMetaType;
};

export type TDeleteType = {
  id: number;
  item: ITEM_TYPE_VALUES;
  status: ORDER_STATUS_TYPE_KEYS;
  displayStatus: ORDER_STATUS_TYPE_VALUES;
  price: price;
  startReservedAt: string;
  endReservedAt: string;
  userId: number;
  eventId: number;
  createdAt: string;
  updatedAt: string;
};

/////// sample

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: TOrderType;
  index: number;
  children: React.ReactNode;
}
