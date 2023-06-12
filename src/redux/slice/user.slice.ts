import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSliceState } from '@/redux/types';

const initialState: UserSliceState = {
  isLogin: false,
  user: null,
  accessToken: '',
};
export const userSlice = createSlice({
  name: 'user',
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
export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
