import React from 'react';
import SubNavigation from '@/components/modules/navigation/SubNavigation';
import HotTopic from '@/components/modules/hot_topic/HotTopic';
import HeaderInnerWrap from '@/components/layer/header/Header.innerWrap';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/storeConfig';

function HeaderBottom() {
  const mainOrder = useSelector(
    (state: RootState) => state.rootReducer.menuOrderReducer.mainMenuOrder
  );
  const subOrder = useSelector(
    (state: RootState) => state.rootReducer.menuOrderReducer.subMenuOrder
  );
  return (
    <HeaderInnerWrap>
      <SubNavigation mainOrder={mainOrder} order={subOrder} />
      <HotTopic />
    </HeaderInnerWrap>
  );
}

export default HeaderBottom;
