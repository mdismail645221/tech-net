import { createSlice } from "@reduxjs/toolkit";

export interface counterState {
  value: number;
}

const initialState = {
  count: 2,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
    incrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
