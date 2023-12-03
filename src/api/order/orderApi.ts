import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { generate_ORDERS } from "..";
import { TDeleteType, MyOrderType } from "../../type/order";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: generate_ORDERS,
  }),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    getOrderList: builder.query<
      MyOrderType,
      { pageNumber: number; pageSize: number }
    >({
      query: (arg) => {
        const { pageNumber, pageSize } = arg;
        return {
          url: "/",
          params: { pageNumber, pageSize },
        };
      },
      providesTags: [{ type: "orders" }],
    }),
    deleteOrderData: builder.mutation<{ orders: TDeleteType }, number>({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },

      invalidatesTags: ["orders"],
    }),
  }),
});

export const { useGetOrderListQuery, useDeleteOrderDataMutation } = ordersApi;
