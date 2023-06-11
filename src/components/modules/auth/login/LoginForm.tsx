import LoginFormView from '@/components/modules/auth/login/LoginFormView';
import { LoginInputData } from '@/components/modules/auth/types';
import { loginAxios } from '@/api/auth';

function LoginForm() {
  const onSubmitHandler = async (data: LoginInputData) => {
    console.log(data);
    const result = await loginAxios(data);
    console.log(result);
  };

  return <LoginFormView onSubmitHandler={onSubmitHandler} />;
}

export default LoginForm;
