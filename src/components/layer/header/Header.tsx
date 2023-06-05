import React from "react";
import Logo from "@/components/common/Logo";
import Navigation from "@/components/modules/navigation/Navigation";
import SearchInput from "@/components/common/SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import { useSelector } from "react-redux";
import { RootState } from "@/store/storeConfig";
import SubNavigation from "@/components/modules/navigation/SubNavigation";
import LoginMenu from "@/components/modules/auth/LoginMenu";
import HeaderInnerWrap from "@/components/layer/header/Header.innerWrap";
import HotTopic from "@/components/modules/hot_topic/HotTopic";

const Header = () => {
  const mainOrder = useSelector(
    (state: RootState) => state.rootReducer.menuOrderReducer.mainMenuOrder
  );
  const subOrder = useSelector(
    (state: RootState) => state.rootReducer.menuOrderReducer.subMenuOrder
  );
  return (
    <header>
      <HeaderInnerWrap>
        <Logo />
        <Navigation order={mainOrder} />
        <SearchInput className={`hidden lg:flex `} />
        <FontAwesomeIcon icon={faCartPlus} className={"text-xl"} />
        <LoginMenu />
      </HeaderInnerWrap>
      <HeaderInnerWrap>
        <SubNavigation mainOrder={mainOrder} order={subOrder} />
        <HotTopic />
      </HeaderInnerWrap>
    </header>
  );
};

export default Header;
