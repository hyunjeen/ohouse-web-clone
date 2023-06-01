import React from "react";
import Logo from "@/components/common/Logo";
import Navigation from "@/components/modules/navigation/Navigation";
import Input from "@/components/common/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import Link from "next/link";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/store/storeConfig";
import SubNavigation from "@/components/modules/navigation/SubNavigation";

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
            <Input />
            <FontAwesomeIcon icon={faCartPlus} className={"text-xl"} />
            <div className={"flex items-center gap-4 text-[14px]"}>
              <Link href={"/login"}>로그인</Link>
              <Link href={"/register"}>회원가입</Link>
              <Link href={"/forum"}>고객센터</Link>
              <button
                className={
                  "flex items-center gap-1 h-[40px] bg-blue-400 px-4 rounded text-white"
                }
                onClick={() => {}}
              >
                <span>글쓰기</span>
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
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
