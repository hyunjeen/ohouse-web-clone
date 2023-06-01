import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchInput() {
  return (
    <div className={`flex items-center border w-[300px] h-[40px] rounded px-2`}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`ml-1 mr-2 translate-y-[2px]`}
      />
      <input className={` outline-0`} placeholder={"통합검색"} />
    </div>
  );
}

export default SearchInput;
