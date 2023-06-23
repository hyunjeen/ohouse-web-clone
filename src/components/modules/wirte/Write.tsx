import React, { useEffect, useRef, useState } from 'react';
import WriterButton from '@/components/common/WriterButton';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';

function Write() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setShowPopup(false);
    }
  };
  useEffect(() => {
    const handleRouteChange = () => {
      setShowPopup(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const onClickHandler = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className={'relative z-30 flex justify-center'}>
      <WriterButton onClickHandler={onClickHandler} />
      {showPopup && (
        <div
          ref={popupRef}
          className={
            'absolute bottom-0 right-0 translate-y-[120%] rounded border bg-white'
          }
        >
          <div className={'flex flex-col'}>
            <Link
              href={'/products/new'}
              className={
                'flex items-center justify-start p-5 hover:bg-gray-100'
              }
            >
              <div>
                <FontAwesomeIcon icon={faImage} className={'mr-2 text-3xl'} />
              </div>
              <div className={'flex flex-col'}>
                <div className={'whitespace-nowrap font-bold'}>상품등록</div>
                <div className={'whitespace-nowrap text-sm text-gray-400'}>
                  판매하고 싶은 상품을 올려보세요
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Write;
