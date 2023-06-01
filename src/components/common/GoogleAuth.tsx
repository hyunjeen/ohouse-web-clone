import React from "react";
import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleAuth = () => {
  const googleLoginHandler = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
  });
  return (
    <div
      className={`border py-2 px-2 rounded flex items-center cursor-pointer mt-5 w-full`}
      onClick={() => {
        googleLoginHandler();
      }}
    >
      <Image
        src={"/pngwing.com.png"}
        width={30}
        height={30}
        alt={"구글이미지"}
      />
      <div className={`flex-1 text-center pr-[15px] font-medium`}>
        구글로 로그인하기
      </div>
    </div>
  );
};

export default GoogleAuth;
