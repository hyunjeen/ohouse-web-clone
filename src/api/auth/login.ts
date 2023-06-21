import { axiosPrivate } from '@/api/auth/common/axios.default';
import { AuthResponse } from '@/api/auth/types';
import { LoginValidator } from '@/validator/loginValidator';

export const login = async (data: LoginValidator): Promise<AuthResponse> => {
  const result = await axiosPrivate.post<AuthResponse>('auth/sign_in', data);
  return result.data;
};
