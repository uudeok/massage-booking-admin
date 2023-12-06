import { configureStore } from "@reduxjs/toolkit";
import { noticeApi } from "../api/notice/noticeApi";
import { ordersApi } from "../api/order/orderApi";

import { setupListeners } from "@reduxjs/toolkit/query";
import orderSlice from "./orderSlice";

export const store = configureStore({
  reducer: {
    order: orderSlice,
    [noticeApi.reducerPath]: noticeApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noticeApi.middleware, ordersApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
