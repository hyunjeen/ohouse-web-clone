import React from 'react';
import Logo from '@/components/common/Logo';
import Navigation from '@/components/modules/navigation/Navigation';
import SearchInput from '@/components/common/SearchInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';
import LoginMenu from '@/components/modules/auth/LoginMenu';
import HeaderInnerWrap from '@/components/layer/header/Header.innerWrap';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/storeConfig';

function HeaderTop() {
  const mainOrder = useSelector(
    (state: RootState) => state.rootReducer.menuOrderReducer.mainMenuOrder
  );
  return (
    <HeaderInnerWrap>
      <Logo />
      <Navigation order={mainOrder} />
      <SearchInput className={`hidden lg:flex`} />
      <FontAwesomeIcon icon={faCartPlus} className={'text-xl'} />
      <LoginMenu />
    </HeaderInnerWrap>
  );
}

export default HeaderTop;
