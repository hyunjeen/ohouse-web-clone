import React from "react";
import { useRouter } from "next/router";

const Testd = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return <div></div>;
};

export default Testd;
