import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./stroe";

const initialState = {
  selectedOrderState: {},
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderState(state, action) {
      state.selectedOrderState = action.payload;
    },
  },
});

export const getOrderState = (state: RootState) =>
  state.order.selectedOrderState;

export const { setOrderState } = orderSlice.actions;
export default orderSlice.reducer;
