import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/storeConfig';

function LoginMenu() {
  const isLogin = useSelector(
    (state: RootState) => state.rootReducer.userReducer.isLogin
  );
  const router = useRouter();
  const redirectUrl = router.pathname.replaceAll('/', '%2F');

  return (
    <div className={'flex items-center gap-4 text-[14px]'}>
      {!isLogin && (
        <>
          <Link href={`/users/sign_in?redirect_to=${redirectUrl}`}>로그인</Link>
          <Link href={'/un_users/new'}>회원가입</Link>
        </>
      )}
      <Link href={'/forum'}>고객센터</Link>
      <button
        className={
          'flex h-[40px] items-center gap-1 rounded bg-blue-400 px-4 text-white'
        }
        onClick={() => {}}
      >
        <span className={`whitespace-nowrap`}>글쓰기</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
    </div>
  );
}

export default LoginMenu;
