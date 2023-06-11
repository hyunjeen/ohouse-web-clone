import {
  LoginInputData,
  RegisterInputData,
} from '@/components/modules/auth/types';
import type { LoginAxiosResponse } from '@/api/types';
import type { RegisterResponse } from '@/api/types';
import { axiosPost } from '@/api/common/axiosPost';

const BASE_REST_URL = '/Authentication';

export const registerAxios = async (
  data: Omit<RegisterInputData, 'password1'>
) => {
  return await axiosPost<RegisterInputData, RegisterResponse>(
    `${BASE_REST_URL}/registration`,
    data,
    '회원가입 실패'
  );
};

export const loginAxios = async (data: LoginInputData) => {
  return await axiosPost<LoginInputData, LoginAxiosResponse>(
    `${BASE_REST_URL}/login`,
    data,
    '로그인 실패'
  );
};
