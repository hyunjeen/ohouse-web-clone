import Label from '@/components/common/Label';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import GoogleAuth from '@/components/common/GoogleAuth';
import Form from '@/components/common/Form';
import ErrorMessageBlock from '@/components/common/ErrorMessageBlock';
import { ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import type { SubmitHandlerProp } from '@/components/modules/auth/types';
import {
  registerResolver,
  RegisterValidator,
} from '@/validator/registerValidator';

function RegisterForm({
  onSubmitHandler,
}: SubmitHandlerProp<RegisterValidator>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValidator>({
    resolver: registerResolver,
  });

  return (
    <>
      <Form onSubmitHandler={handleSubmit(onSubmitHandler)}>
        <h2 className={`flex justify-center text-2xl font-medium`}>회원가입</h2>
        <div className={`mt-5 flex w-full flex-col items-center`}>
          <Label title={'성함'} htmlFor={'name'} />
          <Input
            id={'name'}
            placeholder={'성함'}
            {...register('name')}
            error={!!errors.name}
          />
          <ErrorMessageBlock message={errors.name?.message} />
          <Label title={'이메일'} htmlFor={'email'} />
          <Input
            id={'email'}
            placeholder={'이메일'}
            {...register('email')}
            error={!!errors.email}
          />
          <ErrorMessageBlock message={errors.email?.message} />
          <Label title={'비밀번호'} htmlFor={'password'} />
          <Input
            id={'password'}
            type={'password'}
            placeholder={'비밀번호'}
            autoComplete={'off'}
            {...register('password')}
            error={!!errors.password}
          />
          <ErrorMessageBlock message={errors.password?.message} />
          <Label title={'비밀번호 확인'} htmlFor={'password1'} />
          <Input
            id={'password1'}
            type={'password'}
            placeholder={'비밀번호 확인'}
            autoComplete={'off'}
            {...register('password1')}
            error={!!errors.password1}
          />
          <ErrorMessageBlock message={errors.password1?.message} />
        </div>
        <Button type={'submit'} className={'w-full'}>
          회원가입
        </Button>
        <GoogleAuth />
      </Form>
      <ToastContainer />
    </>
  );
}

export default RegisterForm;
