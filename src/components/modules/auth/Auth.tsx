import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Auth() {
  const router = useRouter();
  const redirectUrl = router.pathname.replaceAll("/", "%2F");
  return (
    <div className={"flex items-center gap-4 text-[14px]"}>
      <Link href={`/users/sign_in?redirect_to=${redirectUrl}`}>로그인</Link>
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
  );
}

export default Auth;
