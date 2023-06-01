import React from "react";
import Label from "@/components/common/Label";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import GoogleAuth from "@/components/common/GoogleAuth";

function RegisterForm() {
  return (
    <div
      className={
        "flex justify-center items-center " +
        "max-w-[350px] m-auto h-full flex-col"
      }
    >
      <h2 className={`flex justify-center text-2xl font-medium`}>회원가입</h2>
      <div className={`flex flex-col gap-2 mt-5 items-center w-full`}>
        <Label name={"성함"}>
          <Input placeholder={"성함"} />
        </Label>
        <Label name={"이메일"}>
          <Input placeholder={"이메일"} />
        </Label>
        <Label name={"비밀번호"}>
          <Input placeholder={"비밀번호"} />
        </Label>
        <Label name={"비밀번호 확인"}>
          <Input placeholder={"비밀번호 확인"} />
        </Label>
      </div>
      <Button>회원가입</Button>
      <GoogleAuth />
    </div>
  );
}

export default RegisterForm;
