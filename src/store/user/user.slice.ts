import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import type { User, UserSliceState } from "@/store/user/types";

const initialState: UserSliceState = {
  isLogin: false,
  user: null,
  accessToken: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user: User; accessToken: string }>
    ) => {
      state.isLogin = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
});
const persistConfig = {
  key: "user",
  storage,
  whitelist: ["userSlice"],
};
export const userReducer = persistReducer(persistConfig, userSlice.reducer);
export const { setUser } = userSlice.actions;
