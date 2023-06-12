import React from 'react';
import SubNavigation from '@/components/modules/navigation/SubNavigation';
import HotTopic from '@/components/modules/hot_topic/HotTopic';
import HeaderInnerWrap from '@/components/layer/header/Header.innerWrap';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/storeConfig';

function HeaderBottom() {
  const curMainMenuOrder = useSelector(
    (state: RootState) => state.currentMenuOrder.currentMainMenuOrder
  );
  const curSubMenuOrder = useSelector(
    (state: RootState) => state.currentMenuOrder.currentSubMenuOrder
  );
  return (
    <HeaderInnerWrap>
      <SubNavigation
        curMainMenuOrder={curMainMenuOrder}
        curSubMenuOrder={curSubMenuOrder}
      />
      <HotTopic />
    </HeaderInnerWrap>
  );
}

export default HeaderBottom;
