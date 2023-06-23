import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CategoryType, SubcategoryType } from '@/services/types';
import { SelectOption } from '@/components/common/select/selectTypes';
export const categoriesApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_AXIOS_BASE_PATH,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<SelectOption[], void>({
      query: () => '/categories',
      transformResponse: (response: CategoryType[]): SelectOption[] =>
        response.map(({ name, uuid }) => ({
          label: name,
          value: uuid,
        })),
    }),
    getSubCategories: builder.query<SelectOption[], string>({
      query: (uuid) => `/categories?id=${uuid}`,
      transformResponse: (response: SubcategoryType[]): SelectOption[] =>
        response.map(({ name, uuid }) => ({
          label: name,
          value: uuid,
        })),
    }),
  }),
});
export const { useGetCategoriesQuery, useGetSubCategoriesQuery } =
  categoriesApi;
