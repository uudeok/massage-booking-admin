import { configureStore } from "@reduxjs/toolkit";
import { noticeApi } from "../api/notice/noticeApi";
import { ordersApi } from "../api/order/orderApi";

export const store = configureStore({
  reducer: {
    [noticeApi.reducerPath]: noticeApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noticeApi.middleware, ordersApi.middleware),
});
