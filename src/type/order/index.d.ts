export const ORDER_STATUS = {
  PENDING: "요청중",
  CONFIRM: "예약확정",
  CANCEL: "취소",
  COMPLETED: "완료",
} as const;

export type valueOf<T> = T[keyof T];
export type ORDER_STATUS_TYPE = typeof ORDER_STATUS;
export type ORDER_STATUS_TYPE_KEYS = keyof ORDER_STATUS_TYPE;
export type ORDER_STATUS_TYPE_VALUES = valueOf<ORDER_STATUS_TYPE>;

const DAY_OF_WEEK = {
  monday: "monday",
  tuesday: "tuesday",
  wednesday: "wednesday",
  thursday: "thursday",
  friday: "friday",
  saturday: "saturday",
  sunday: "sunday",
} as const;

export type TOrderType = {
  id: number;
  price: number;
  item: BOOKING_ITEM_VALUE;
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

export type TPostOrderType = {
  item: BOOKING_ITEM_VALUE;
  price: number;
  startReservedAt: string;
  endReservedAt: string;
};

export type TPostEventType = {
  targetDate: string;
  startReservedTime: string;
  endReservedTime: string;
  dayOfWeek: string;
  itemId: number;
  tutorId: number;
};

export type TPostType = {
  order: TPostOrderType;
  event: TPostEventType;
};

export type TDeleteType = {
  id: number;
  item: BOOKING_ITEM_VALUE;
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
