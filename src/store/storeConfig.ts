import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PERSIST, persistStore, PURGE } from "redux-persist";
import { menuOrderReducer } from "@/store/menuOrder/menuOrder.slice";
import { userReducer } from "@/store/user/user.slice";

const rootReducer = combineReducers({
  menuOrderReducer,
  userReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
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
