import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductItems } from '@/services/types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_AXIOS_BASE_PATH,
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductItems, void>({
      query: () => '/products',
      providesTags: ['Products'],
    }),
    createProduct: builder.mutation({
      query: (formData: FormData) => ({
        url: '/products/new',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});
export const { useGetProductsQuery, useCreateProductMutation } = productsApi;
