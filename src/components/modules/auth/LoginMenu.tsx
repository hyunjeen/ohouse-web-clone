import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/storeConfig';
import { useLogoutHook } from '@/hooks/useLogoutHook';

function LoginMenu() {
  const status = useSelector((state: RootState) => state.userReducer.status);
  const router = useRouter();
  const redirectUrl = router.pathname.replaceAll('/', '%2F');
  const { onLogoutHandler } = useLogoutHook();
  return (
    <div className={'flex items-center gap-4 text-[14px]'}>
      {status != 'success' && (
        <>
          <Link href={`/users/sign_in?redirect_to=${redirectUrl}`}>로그인</Link>
          <Link href={'/un_users/new'}>회원가입</Link>
        </>
      )}
      {status == 'success' && (
        <button onClick={onLogoutHandler}>로그아웃</button>
      )}
      <Link href={'/forum'}>고객센터</Link>
    </div>
  );
}

export default LoginMenu;
