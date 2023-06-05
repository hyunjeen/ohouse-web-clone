import React from 'react';
import Image from 'next/image';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleAuth = () => {
  const googleLoginHandler = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
    },
  });
  return (
    <div
      className={`mt-5 flex w-full cursor-pointer items-center rounded border p-2`}
      onClick={() => {
        googleLoginHandler();
      }}
    >
      <Image
        src={'/pngwing.com.png'}
        width={30}
        height={30}
        alt={'구글이미지'}
      />
      <div className={`flex-1 pr-[15px] text-center font-medium`}>
        구글로 로그인하기
      </div>
    </div>
  );
};

export default GoogleAuth;
