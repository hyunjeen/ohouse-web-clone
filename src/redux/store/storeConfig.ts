import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { currentMenuOrderReducer } from '@/redux/slice/currentMenuOrder.slice';
import { userReducer } from '@/redux/slice/user.slice';
import { persistStore, PERSIST, PURGE } from 'redux-persist';
import { productImagesSliceReducer } from '@/redux/slice/productImages.slice';
import { categoriesApi } from '@/services/categoryApi';
import { productsApi } from '@/services/productApi';

const rootReducer = combineReducers({
  currentMenuOrder: currentMenuOrderReducer,
  userReducer,
  productImagesSliceReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }).concat(categoriesApi.middleware, productsApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
