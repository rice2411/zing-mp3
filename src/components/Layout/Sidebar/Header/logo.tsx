import React from "react";
import useTheme from "../../../../hooks/useTheme";

export default function Logo({ isToggle }: any) {
  const { theme }: any = useTheme();
  return (
    <div className="px-3">
      <a
        href="#"
        className={`${
          isToggle ? "flex" : "hidden"
        } items-center pl-2.5 mb-5 xl:flex lg:flex `}
      >
        <img
          src={`${theme == "dark" ? "/icon/logo.svg" : "/icon/logo-light.svg"}`}
          className="mr-3 h-8"
          alt="zingmp3"
        />
      </a>
      <a
        href="#"
        className={`${
          isToggle ? "hidden" : "flex"
        } items-center justify-center  mb-5 xl:hidden lg:hidden`}
      >
        <img src="/icon/logo-mobile.svg" className=" h-12" alt="zingmp3" />
      </a>
    </div>
  );
}
