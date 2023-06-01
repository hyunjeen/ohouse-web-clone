import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";
import GoogleAuth from "@/components/common/GoogleAuth";

function LoginForm() {
  return (
    <div
      className={
        "flex justify-center items-center " +
        "max-w-[300px] m-auto h-full flex-col"
      }
    >
      <h2 className={`flex justify-center font-medium text-2xl`}>로그인</h2>
      <form className={`w-full`}>
        <div className={`flex flex-col gap-2 mt-5 items-center`}>
          <Input placeholder={"이메일"} />
          <Input placeholder={"비밀번호"} />
        </div>
        <Button>로그인</Button>
        <div className={`flex gap-3 mt-5 justify-center`}>
          <Link href={"/un_users/new"}>회원가입</Link>
          <Link href={""}>비밀번호 재설정</Link>
        </div>
        <GoogleAuth />
      </form>
    </div>
  );
}

export default LoginForm;
