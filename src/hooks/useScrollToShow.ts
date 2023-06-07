import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash-es';

export const useScrollToShow = (offset = 15, delay = 100) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const lastScrollTop = useRef<number>(0);

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
  };

  const tScrollHandler = throttle(() => {
    scrollHandler();
  }, delay);

  useEffect(() => {
    window.addEventListener('scroll', tScrollHandler);
    return () => {
      window.removeEventListener('scroll', tScrollHandler);
    };
  }, [tScrollHandler]);

  return isShow;
};
