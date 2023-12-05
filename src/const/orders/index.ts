export const ORDER_STATUS = {
  PENDING: "요청중",
  CONFIRM: "예약확정",
  CANCEL: "취소",
  COMPLETED: "완료",
} as const;

export const ORDER_STATUS_ARRAY = [
  { key: "PENDING", value: "요청중" },
  { key: "CONFIRM", value: "예약확정" },
  { key: "CANCEL", value: "취소" },
  { key: "COMPLETED", value: "완료" },
];

const DAY_OF_WEEK = {
  monday: "monday",
  tuesday: "tuesday",
  wednesday: "wednesday",
  thursday: "thursday",
  friday: "friday",
  saturday: "saturday",
  sunday: "sunday",
} as const;
