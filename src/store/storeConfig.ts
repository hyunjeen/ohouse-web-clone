import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import {
  persistReducer as PersistReducer,
  persistStore,
  PERSIST,
  PURGE,
} from "redux-persist";
import breadCrumbSlugSlice from "@/store/menuState/MenuState.slice";
import logger from "redux-logger";

const persistConfig = {
  key: "breadcrumb_slug",
  storage,
  whitelist: ["breadCrumbSlugSlice"],
};
const rootReducer = combineReducers({
  breadCrumbSlugSlice,
});
const persistReducer = PersistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }).concat(logger),
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
