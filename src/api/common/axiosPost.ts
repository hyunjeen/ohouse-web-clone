import { AxiosErrorResponse } from '@/api/types';
import { toastifyError } from '@/util/toastifyError';
import axios, { AxiosError } from 'axios';

export const axiosPost = async <T, U>(
  url: string,
  data: T,
  errorMessage: string
): Promise<U | undefined> => {
  try {
    const result = await axios.post<U>(url, data);
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      const message = axiosError?.response?.data.message || errorMessage;
      toastifyError(message);
    }
    return undefined;
  }
};
