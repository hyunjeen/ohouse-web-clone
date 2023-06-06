import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash-es';

export const useScrollToShow = (offset = 15, delay = 100) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const lastScrollTop = useRef<number>(0);
  const requestRef = useRef<number>();

  const scrollHandler = () => {
    const currentScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScrollTop > lastScrollTop.current + offset) {
      // 스크롤 다운
      if (isShow) {
        setIsShow(false);
      }
    } else if (
      currentScrollTop < lastScrollTop.current - offset &&
      currentScrollTop + window.innerHeight <
        document.documentElement.scrollHeight
    ) {
      // 스크롤 업
      if (!isShow) {
        setIsShow(true);
      }
    }
    lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop; // Scroll is at top
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
  };

  const requestAnimation = debounce(() => {
    scrollHandler();
    requestRef.current = requestAnimationFrame(scrollHandler);
  }, delay);

  useEffect(() => {
    window.addEventListener('scroll', requestAnimation);
    return () => {
      window.removeEventListener('scroll', requestAnimation);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [requestAnimation]);

  return isShow;
};
