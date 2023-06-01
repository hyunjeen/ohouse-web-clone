import React from "react";
import Logo from "@/components/common/Logo";
import Navigation from "@/components/modules/navigation/Navigation";
import SearchInput from "@/components/common/SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import Link from "next/link";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/store/storeConfig";
import SubNavigation from "@/components/modules/navigation/SubNavigation";
import Auth from "@/components/modules/auth/Auth";

const Header = () => {
  const mainOrder = useSelector(
    (state: RootState) => state.persistReducer.breadCrumbSlugSlice.mainMenuOrder
  );
  const subOrder = useSelector(
    (state: RootState) => state.persistReducer.breadCrumbSlugSlice.subMenuOrder
  );
  return (
    <header>
      <div>
        <div className={"border-b"}>
          <div className={"flex items-center max-w-7xl m-auto py-4 gap-7"}>
            <Logo />
            <Navigation order={mainOrder} />
            <SearchInput />
            <FontAwesomeIcon icon={faCartPlus} className={"text-xl"} />
            <Auth />
          </div>
        </div>
        <div className={"border-b"}>
          <div className={"flex items-center max-w-7xl m-auto py-4 gap-7"}>
            <SubNavigation mainOrder={mainOrder} order={subOrder} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
