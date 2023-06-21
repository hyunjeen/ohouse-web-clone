import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { currentMenuOrderReducer } from '@/redux/slice/currentMenuOrder.slice';
import { userReducer } from '@/redux/slice/user.slice';
import { persistStore, PERSIST, PURGE } from 'redux-persist';

const rootReducer = combineReducers({
  currentMenuOrder: currentMenuOrderReducer,
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
