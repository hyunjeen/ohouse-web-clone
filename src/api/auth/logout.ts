import { axiosPrivate } from '@/api/auth/common/axios.default';
import { AuthResponse } from '@/api/auth/types';

export const logout = async (): Promise<AuthResponse> => {
  const result = await axiosPrivate.post<AuthResponse>('auth/logout');
  return result.data;
};
