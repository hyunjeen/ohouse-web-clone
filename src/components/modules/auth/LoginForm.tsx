import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";
import GoogleAuth from "@/components/common/GoogleAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginValidateSchema } from "@/schema/LoginValidate.schema";
import ErrorMessageBlock from "@/components/common/ErrorMessageBlock";
import Form from "@/components/common/Form";
import type { LoginDto } from "@/components/modules/auth/types";

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
      <h2 className={`flex justify-center font-medium text-2xl`}>로그인</h2>
      <div className={`flex flex-col gap-1 mt-5 items-center w-full`}>
        <Input
          placeholder={"이메일"}
          {...register("email")}
          error={!!errors.email}
        />
        <ErrorMessageBlock
          error={!!errors.email}
          message={errors.email?.message}
        />
        <Input
          type={"password"}
          error={!!errors.password}
          placeholder={"비밀번호"}
          {...register("password")}
        />
        <ErrorMessageBlock
          error={!!errors.password}
          message={errors.password?.message}
        />
      </div>
      <div className={`flex flex-col gap-4 w-full`}>
        <Button type={"submit"}>로그인</Button>
        <div className={`flex gap-3 mt-5 justify-center`}>
          <Link href={"/un_users/new"}>회원가입</Link>
          <Link href={""}>비밀번호 재설정</Link>
        </div>
        <GoogleAuth />
      </div>
    </Form>
  );
}

export default LoginForm;
