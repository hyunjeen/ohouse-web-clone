import { useCallback, useState } from 'react';
import auth from '@/api/auth';
import { AxiosError } from 'axios';
import { AxiosErrorResponse } from '@/api/auth/types';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slice/user.slice';
import { useRouter } from 'next/router';
import { LoginValidator } from '@/validator/loginValidator';

export const useLoginHook = () => {
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const errorReset = () => {
    setErrorStatus(false);
    setErrorMessage('');
  };

  const onSubmitHandler = useCallback(
    async (data: LoginValidator) => {
      try {
        const result = await auth.login(data);
        dispatch(setUser(result));
        void router.replace('/?sign_in=true');
      } catch (error) {
        const axiosError = error as unknown as AxiosError<AxiosErrorResponse>;
        if (axiosError) {
          setErrorStatus(true);
          setErrorMessage('로그인 정보가 유효하지 않습니다');
        }
      }
    },
    [dispatch, router]
  );
  return { errorStatus, errorMessage, onSubmitHandler, errorReset };
};
