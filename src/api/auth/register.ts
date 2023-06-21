import { axiosPrivate } from '@/api/auth/common/axios.default';
import { AuthResponse } from '@/api/auth/types';
import { RegisterValidator } from '@/validator/registerValidator';

export const register = async (
  data: RegisterValidator
): Promise<AuthResponse> => {
  const result = await axiosPrivate.post<AuthResponse>('auth/sign_up', data);
  return result.data;
};
