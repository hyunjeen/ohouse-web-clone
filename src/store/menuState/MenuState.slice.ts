import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  mainMenuOrder: number;
  subMenuOrder: number;
  isLoaded: boolean;
}
const initialState: CounterState = {
  mainMenuOrder: 1,
  subMenuOrder: 1,
  isLoaded: false,
};

export const counterSlice = createSlice({
  name: "menuState",
  initialState,
  reducers: {
    setMainMenuOrder: (state, action) => {
      state.mainMenuOrder = action.payload;
    },
    setSubMenuOrder: (state, action) => {
      state.subMenuOrder = action.payload;
    },
    toggleLoaded: (state) => {
      state.isLoaded = !state.isLoaded;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(PURGE, () => initialState);
  // },
});

export const { setMainMenuOrder, setSubMenuOrder, toggleLoaded } =
  counterSlice.actions;
export default counterSlice.reducer;
