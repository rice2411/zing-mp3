import React from "react";
import useTheme from "../../../hooks/useTheme";

import Actions from "./Actions";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { getFile } from "../../../constant/file";
import { useLocation } from "react-router-dom";
import "./styles.css";
import LoginModal from "../../Login";
import RegisterModal from "../../Register";

const Navbar = () => {
  const { styles }: any = useTheme();
  const location = useLocation();
  return (
    <div
      className={`  min-h-[70px] max-h-[70px] w-full flex  py-2 mb-4 items-center ${styles.navbar.textColor} relative `}
    >
      {(location.pathname.includes("/nghe-si") &&
        !location.pathname.includes("/tim-kiem")) ||
      (location.pathname.includes("/zing-chart") &&
        !location.pathname.includes("/tim-kiem")) ? (
        <>
          <div
            style={{
              backgroundImage: `url(${
                location.pathname.includes("/zing-chart")
                  ? getFile("bg.jpg")
                  : getFile(JSON.parse(localStorage.getItem("avatar")))
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: location.pathname.includes("/zing-chart")
                ? ""
                : "50%",
              filter: location.pathname.includes("/zing-chart")
                ? "grayscale(1)"
                : " blur(50px)",
            }}
            className={`${
              location.pathname.includes("/zing-chart")
                ? "h-[500px] top-0"
                : "h-[370px]"
            } w-full  absolute`}
          ></div>
          {/* <div
            style={{
              backgroundColor: "rgba(41,21,71,0.8)",
              backgroundSize: "cover",
            }}
            className=" h-[600px] min-w-[1300px] absolute "
          ></div> */}
          <div className="blur_1 absolute w-full h-[500px] top-0"></div>
          {location.pathname.includes("/zing-chart") && (
            <>
              <div className="blur_2 absolute w-full h-[500px] top-0"></div>
            </>
          )}
        </>
      ) : (
        <></>
      )}
      <div className="mx-10 px-3 flex items-center  w-full z-50">
        <Navigation />
        <SearchBar />
        <Actions />
        <LoginModal />
        <RegisterModal />
      </div>
    </div>
  );
};

export default Navbar;
