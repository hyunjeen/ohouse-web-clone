import Label from '@/components/common/Label';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import GoogleAuth from '@/components/common/GoogleAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { RegisterDto } from '@/components/modules/auth/types';
import Form from '@/components/common/Form';
import ErrorMessageBlock from '@/components/common/ErrorMessageBlock';
import { RegisterValidateSchema } from '@/schema/RegisterValidate.schema';

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({ resolver: yupResolver(RegisterValidateSchema) });

  const onSubmitHandler = (data: RegisterDto) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2 className={`flex justify-center text-2xl font-medium`}>회원가입</h2>
      <div className={`mt-5 flex w-full flex-col items-center`}>
        <Label name={'성함'}>
          <Input
            placeholder={'성함'}
            {...register('name')}
            error={!!errors.name}
          />
        </Label>
        <ErrorMessageBlock
          error={!!errors.name}
          message={errors.name?.message}
        />
        <Label name={'이메일'}>
          <Input
            placeholder={'이메일'}
            {...register('email')}
            error={!!errors.email}
          />
        </Label>
        <ErrorMessageBlock
          error={!!errors.email}
          message={errors.email?.message}
        />
        <Label name={'비밀번호'}>
          <Input
            placeholder={'비밀번호'}
            autoComplete={'off'}
            {...register('password')}
            error={!!errors.password}
          />
        </Label>
        <ErrorMessageBlock
          error={!!errors.password}
          message={errors.password?.message}
        />
        <Label name={'비밀번호 확인'}>
          <Input
            placeholder={'비밀번호 확인'}
            autoComplete={'off'}
            {...register('password1')}
            error={!!errors.password1}
          />
        </Label>
        <ErrorMessageBlock
          error={!!errors.password1}
          message={errors.password1?.message}
        />
      </div>
      <Button type={'submit'}>회원가입</Button>
      <GoogleAuth />
    </Form>
  );
}

export default RegisterForm;
