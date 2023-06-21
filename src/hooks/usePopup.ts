import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toastifyDefault } from '@/util/toastifyDefault';

export function usePopup() {
  const { query } = useRouter();

  useEffect(() => {
    const isPopup = window.sessionStorage.getItem('signup_popup');
    if (isPopup == null && query.signup_popup == 'true') {
      toastifyDefault('회원가입을 축하합니다');
      window.sessionStorage.setItem('signup_popup', 'true');
    }
    if (query.logout_popup === 'true') {
      toastifyDefault('안전하게 로그아웃 되셨습니다');
    }
    if (query.sign_in === 'true') {
      toastifyDefault('로그인에 성공하셨습니다.');
    }
  }, [query]);
}
