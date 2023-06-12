import { createSlice } from '@reduxjs/toolkit';
import type { MenuOrderState } from '@/redux/types';

const initialState: MenuOrderState = {
  currentMainMenuOrder: 0,
  currentSubMenuOrder: 0,
};

export const currentMenuOrderSlice = createSlice({
  name: 'currentMenuOrder',
  initialState,
  reducers: {
    setCurrentMainMenuOrder: (state, action) => {
      state.currentMainMenuOrder = action.payload;
    },
    setCurrentSubMenuOrder: (state, action) => {
      state.currentSubMenuOrder = action.payload;
    },
  },
});

export const currentMenuOrderReducer = currentMenuOrderSlice.reducer;
export const { setCurrentMainMenuOrder, setCurrentSubMenuOrder } =
  currentMenuOrderSlice.actions;
