import { generate_NOTICE } from "..";
import { NOTICE_CATEGORY_KEYS, NoticeType } from "../../type/notice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noticeApi = createApi({
  reducerPath: "noticeApi",
  baseQuery: fetchBaseQuery({ baseUrl: generate_NOTICE }),
  tagTypes: ["notice"],
  endpoints: (builder) => ({
    getNoticeList: builder.query<
      NoticeType,
      {
        pageNumber: number;
        pageSize: number;
        category?: NOTICE_CATEGORY_KEYS | undefined;
      }
    >({
      query: (arg) => {
        const { pageNumber, pageSize, category } = arg;
        console.log(pageNumber, pageSize, category);

        return {
          url:
            category === "ALL"
              ? `/?pageNumber=${pageNumber}&pageSize=${pageSize}`
              : `/?pageNumber=${pageNumber}&pageSize=${pageSize}&category=${category}`,
        };
      },
      providesTags: [{ type: "notice" }],
    }),
  }),
});

export const { useGetNoticeListQuery } = noticeApi;
