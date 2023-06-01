import React from "react";
import Logo from "@/components/common/Logo";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";

function Index() {
  const googleLoginHandler = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
  });
  return (
    <section className={"w-full h-[100vh]"}>
      <div
        className={
          "flex justify-center items-center " +
          "max-w-[300px] m-auto h-full flex-col"
        }
      >
        <div className={`flex justify-center`}>
          <Logo />
        </div>
        <div className={`flex flex-col gap-2 mt-5 items-center w-full`}>
          <Input placeholder={"이메일"} />
          <Input placeholder={"비밀번호"} />
        </div>
        <div className={`w-full`}>
          <Button>로그인</Button>
        </div>
        <div className={`flex gap-3 mt-5`}>
          <Link href={""}>회원가입</Link>
          <Link href={""}>비밀번호 재설정</Link>
        </div>
        <div className={`w-full`}>
          <div
            className={`border py-2 px-2 rounded flex items-center cursor-pointer mt-5`}
            onClick={() => {
              googleLoginHandler();
            }}
          >
            <div>
              <Image
                src={"/pngwing.com.png"}
                width={30}
                height={30}
                alt={"구글이미지"}
              />
            </div>
            <div className={`flex-1 text-center pr-[15px] font-medium`}>
              구글로 로그인하기
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Index.getInitialProps = async (ctx: { pathname: string }) => {
  const pathname = ctx.pathname;
  return { pathname };
};

export default Index;
