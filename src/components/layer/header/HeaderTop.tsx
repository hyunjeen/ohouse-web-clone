import Logo from '@/components/common/Logo';
import Navigation from '@/components/modules/navigation/Navigation';
import SearchInput from '@/components/common/SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';
import LoginMenu from '@/components/modules/auth/LoginMenu';
import HeaderInnerWrap from '@/components/layer/header/Header.innerWrap';
import { RootState } from '@/redux/store/storeConfig';
import { useSelector } from 'react-redux';
import React from 'react';
import Write from '@/components/modules/wirte/Write';

function HeaderTop() {
  const curMainMenuOrder = useSelector(
    (state: RootState) => state.currentMenuOrder.currentMainMenuOrder
  );

  return (
    <HeaderInnerWrap>
      <Logo />
      <Navigation order={curMainMenuOrder} />
      <SearchInput className={`hidden lg:flex`} />
      <FontAwesomeIcon icon={faCartPlus} className={'text-xl'} />
      <LoginMenu />
      <Write />
    </HeaderInnerWrap>
  );
}

export default HeaderTop;
