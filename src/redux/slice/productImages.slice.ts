import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductImagesState } from '@/redux/types';

const initialState: ProductImagesState = {
  images: [],
};

export const productImagesSlice = createSlice({
  name: 'productImages',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<File[]>) => {
      state.images = action.payload;
    },
  },
});

export const productImagesSliceReducer = productImagesSlice.reducer;
export const { setImages } = productImagesSlice.actions;
