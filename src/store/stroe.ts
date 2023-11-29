import { configureStore } from "@reduxjs/toolkit";
import { noticeApi } from "../api/notice/noticeApi";

export const store = configureStore({
  reducer: {
    [noticeApi.reducerPath]: noticeApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noticeApi.middleware),
});
