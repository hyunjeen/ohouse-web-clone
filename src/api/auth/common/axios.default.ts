import axios, { InternalAxiosRequestConfig } from 'axios';
import { store } from '@/redux/store/storeConfig';

export const axiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_PATH,
  withCredentials: true,
  timeout: 5000,
});

axiosPrivate.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers['Authorization'] =
    `Bearer ${store.getState().userReducer.accessToken}` || '';
  return config;
});
