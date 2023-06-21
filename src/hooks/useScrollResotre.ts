import { useEffect, useRef } from 'react';

function useScrollRestoration(): void {
  //애니메이션프레임 id 저장
  const frame = useRef<number | null>(null);

  useEffect(() => {
    let scrollPosition: number;

    const saveScrollPosition = () => {
      scrollPosition = window.scrollY;
      frame.current = requestAnimationFrame(saveScrollPositionToSession);
    };

    const saveScrollPositionToSession = () => {
      sessionStorage.setItem('scrollPosition', scrollPosition.toString());
    };

    const restoreScrollPosition = () => {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');
      if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }
    };

    window.addEventListener('scroll', saveScrollPosition);
    window.addEventListener('load', restoreScrollPosition);

    return () => {
      window.removeEventListener('scroll', saveScrollPosition);
      window.removeEventListener('load', restoreScrollPosition);
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);
}

export default useScrollRestoration;
