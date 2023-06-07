import { LoginDto } from '@/components/modules/auth/types';
import axios, { AxiosError } from 'axios';
import { toastifyError } from '@/util/toastifyError';
interface LoginAxiosResponse {
  email: string;
  name: string;
  accessToken: string;
}
interface AxiosErrorResponse {
  statusCode: number;
  message: string;
  path: string;
  timestamp: string;
}

export const loginAxios = async (data: LoginDto) => {
  try {
    const result = await axios.post<LoginAxiosResponse>(
      '/Authorization/login',
      data
    );
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<AxiosErrorResponse>;
      const message = axiosError?.response?.data.message;
      if (message) {
        toastifyError(message);
      }
    }
  }
};
