import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSliceState } from '@/redux/types';
import { persistReducer, PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: UserSliceState = {
  status: null,
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
      state.status = 'success';
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    reset: (state) => {
      state.status = null;
      state.user = null;
      state.accessToken = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
const _userReducer = userSlice.reducer;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'status', 'accessToken'],
};

export const userReducer = persistReducer(persistConfig, _userReducer);
export const { setUser, reset } = userSlice.actions;
