import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import { persistReducer as PersistReducer } from "redux-persist";

export interface MenuOrderState {
  mainMenuOrder: number;
  subMenuOrder: number;
}

const initialState: MenuOrderState = {
  mainMenuOrder: 1,
  subMenuOrder: 1,
};

export const menuOrderSlice = createSlice({
  name: "menuOrder",
  initialState,
  reducers: {
    setMainMenuOrder: (state, action) => {
      state.mainMenuOrder = action.payload;
    },
    setSubMenuOrder: (state, action) => {
      state.subMenuOrder = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(PURGE, () => initialState);
  // },
});

const persistConfig = {
  key: "menu_order",
  storage,
  whitelist: ["menuOrderSlice"],
};

export const menuOrderReducer = PersistReducer(
  persistConfig,
  menuOrderSlice.reducer
);
export const { setMainMenuOrder, setSubMenuOrder } = menuOrderSlice.actions;
