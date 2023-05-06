import React, { useEffect, useState } from "react";
import useTheme from "../../../hooks/useTheme";
import { data as Tabs } from "./tab";
import { Link, useLocation } from "react-router-dom";
import LibraryService from "../../../service/library";
import { getFile } from "../../../constant/file";

const Playlist = ({ ...props }: any) => {
  const { styles }: any = useTheme();
  const location = useLocation();
  const activeTabClass = `!text-white !border-b-2 !border-[#9b4de0]`;
  const checkRoute = (route: any) => {
    if (location.pathname == Tabs.route && route == -1) {
      return true;
    } else {
      return location.pathname.includes(route);
    }
  };
  return (
    <>
      {" "}
      <div
        className={`flex items-center w-full  border-b-[1px] border-[${styles.dropdown.borderColor}] `}
      >
        <h1
          className={`text-white font-bold text-2xl pr-3 border-r-[2px] border-[${styles.dropdown.borderColor}]`}
        >
          Playlist
        </h1>
        <div className="text-sm font-medium text-center ">
          <ul className="flex flex-wrap -mb-px">
            {Tabs.children.map((tab: any, idx: any) => (
              <li className="mr-2" key={idx}>
                <Link
                  // state={{ tab: tab.tab, key: key }}
                  to={Tabs.route + (tab.route == -1 ? "" : tab.route)}
                  className={`${
                    checkRoute(tab.route) && activeTabClass
                  } uppercase inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[#dadada] hover:text-white`}
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>{" "}
      {props.children}
    </>
  );
};

export default Playlist;
