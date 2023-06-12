import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  PERSIST,
  persistStore,
  REHYDRATE,
  PURGE,
  PAUSE,
  FLUSH,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import { currentMenuOrderReducer } from '@/redux/slice/currentMenuOrder.slice';
import { userReducer } from '@/redux/slice/user.slice';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { createNoopStorage } from '@/redux/store/ssrStorage';

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const rootReducer = combineReducers({
  currentMenuOrder: currentMenuOrderReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
