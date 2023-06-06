import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Link from 'next/link';
import GoogleAuth from '@/components/common/GoogleAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValidateSchema } from '@/schema/LoginValidate.schema';
import ErrorMessageBlock from '@/components/common/ErrorMessageBlock';
import Form from '@/components/common/Form';
import type { LoginDto } from '@/components/modules/auth/types';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({ resolver: yupResolver(LoginValidateSchema) });

  const onSubmitHandler = (data: LoginDto) => {
    console.log(data.email);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2 className={`flex justify-center text-2xl font-medium`}>로그인</h2>
      <div className={`mt-5 flex w-full flex-col items-center gap-1`}>
        <Input
          placeholder={'이메일'}
          {...register('email')}
          error={!!errors.email}
        />
        <ErrorMessageBlock
          error={!!errors.email}
          message={errors.email?.message}
        />
        <Input
          type={'password'}
          error={!!errors.password}
          placeholder={'비밀번호'}
          autoComplete="off"
          {...register('password')}
        />
        <ErrorMessageBlock
          error={!!errors.password}
          message={errors.password?.message}
        />
      </div>
      <div className={`flex w-full flex-col gap-4`}>
        <Button type={'submit'}>로그인</Button>
        <div className={`mt-5 flex justify-center gap-3`}>
          <Link href={'/un_users/new'}>회원가입</Link>
          <Link href={''}>비밀번호 재설정</Link>
        </div>
        <GoogleAuth />
      </div>
    </Form>
  );
}

export default LoginForm;
