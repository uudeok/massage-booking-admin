export const NOTICE_CATEGORY = {
  ALL: "전체",
  BUSINESS_TIME: "영업시간",
  EVENT: "이벤트",
  ETC: "기타",
  RULE: "운영방침",
} as const;

export type valueOf<T> = T[keyof T];
export type NOTICE_CATEGORY_TYPE = typeof NOTICE_CATEGORY;
export type NOTICE_CATEGORY_KEYS = keyof NOTICE_CATEGORY_TYPE;
export type NOTICE_CATEGORY_VALUES = valueOf<NOTICE_CATEGORY_TYPE>;

export type TNotice = {
  category: NOTICE_CATEGORY_KEYS;
  content: string;
  createdAt: string;
  displayCategory: NOTICE_CATEGORY_VALUES;
  id: number;
  title: string;
  updatedAt: string;
  viewCount: number;
  writer: string;
};

export type TNoticeMeta = {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalCount: number;
};

export type NoticeType = {
  notices: TNoticeDetail[];
  meta: TNoticeMeta;
};
