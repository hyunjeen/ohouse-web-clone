import LoginFormView from '@/components/modules/auth/login/LoginFormView';
import { LoginInputData } from '@/components/modules/auth/types';
import { loginAxios } from '@/api/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slice/user.slice';
import { useRouter } from 'next/router';

function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmitHandler = async (data: LoginInputData) => {
    const result = await loginAxios(data);
    if (result) {
      const { accessToken, ...user } = result;
      dispatch(setUser({ user, accessToken }));
      void router.replace('/');
    }
  };

  return <LoginFormView onSubmitHandler={onSubmitHandler} />;
}

export default LoginForm;
