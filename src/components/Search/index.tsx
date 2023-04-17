import React, { useState, useEffect, useRef } from "react";
import useTheme from "../../hooks/useTheme";
import { Link, useLocation } from "react-router-dom";

import Artist from "./All/Artist";
import { data as Tabs } from "./All/Tab";

const Search = ({ ...props }: any) => {
  const location = useLocation();

  const { key } = location.state;

  const { styles }: any = useTheme();

  const activeTabClass = `!text-white !border-b-2 !border-[#9b4de0]`;

  return (
    <div>
      <div
        className={`flex items-center w-full  border-b-[1px] border-[${styles.dropdown.borderColor}] `}
      >
        <h1
          className={`text-white font-bold text-2xl pr-3 border-r-[2px] border-[${styles.dropdown.borderColor}]`}
        >
          Kết quả tìm kiếm
        </h1>
        <div className="text-sm font-medium text-center ">
          <ul className="flex flex-wrap -mb-px">
            {Tabs.children.map((tab: any, idx: any) => (
              <li className="mr-2" key={idx}>
                <Link
                  state={{ tab: tab.tab, key: key }}
                  to={Tabs.route + tab.route}
                  className={`${
                    location.pathname.includes(tab.route) && activeTabClass
                  } uppercase inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[#dadada] hover:text-white`}
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Search;
