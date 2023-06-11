import { useEffect } from 'react';
import { useRouter } from 'next/router';
import RegisterFormView from '@/components/modules/auth/register/RegisterFormView';
import { RegisterInputData } from '@/components/modules/auth/types';
import { registerAxios } from '@/api/auth';

function RegisterForm() {
  const { replace } = useRouter();

  useEffect(() => {
    // 세션 스토리지 회원가입 팝업 상태 초기화
    window.sessionStorage.removeItem('signup_popup');
  }, []);

  const onSubmitHandler = async (data: RegisterInputData): Promise<void> => {
    const { password1: _, ...user } = data;
    const result = await registerAxios(user);
    console.log(result);
    if (result) {
      // redux 유저상태 업데이트
      void replace('/?signup_popup=true');
    }
  };

  return <RegisterFormView onSubmitHandler={onSubmitHandler} />;
}

export default RegisterForm;
