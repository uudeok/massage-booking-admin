export const NOTICE_CATEGORY = {
  ALL: "전체",
  BUSINESS_TIME: "영업시간",
  EVENTS: "이벤트",
  ETC: "기타",
  RULES: "운영방침",
} as const;

export type valueOf<T> = T[keyof T];
export type NOTICE_CATEGORY_TYPE = typeof NOTICE_CATEGORY;
export type NOTICE_CATEGORY_KEYS = keyof NOTICE_CATEGORY_TYPE;
export type NOTICE_CATEGORY_VALUES = valueOf<NOTICE_CATEGORY_TYPE>;

export type TNotice = {
  title: string;
  date: string;
  category: NOTICE_CATEGORY_KEYS;
  content: string;
  id: number;
  auth: string;
};
