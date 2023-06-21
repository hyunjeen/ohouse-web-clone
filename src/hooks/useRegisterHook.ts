import { useState } from 'react';
import auth from '@/api/auth';
import { AxiosError } from 'axios';
import { AxiosErrorResponse } from '@/api/auth/types';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slice/user.slice';
import { useRouter } from 'next/router';
import { RegisterValidator } from '@/validator/registerValidator';

export const useRegisterHook = () => {
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const errorReset = () => {
    setErrorStatus(false);
    setErrorMessage('');
  };

  const onSubmitHandler = async (data: RegisterValidator) => {
    try {
      const result = await auth.register(data);
      dispatch(setUser(result));
      void router.replace('/?sign_up=true');
    } catch (error) {
      const axiosError = error as unknown as AxiosError<AxiosErrorResponse>;
      if (axiosError) {
        setErrorStatus(true);
        setErrorMessage('회원가입에 실패하셨습니다');
      }
    }
  };
  return { errorStatus, errorMessage, onSubmitHandler, errorReset };
};
