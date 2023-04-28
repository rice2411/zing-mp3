import React, { useRef } from "react";
import useTheme from "../../../../../hooks/useTheme";
import { iconStyles, widthDefaultValue } from "../../styles";
import { data } from "./data";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";

export default function Library({ isToggle }: any) {
  const { styles }: any = useTheme();
  const canPlayRefs = useRef([]);
  const { handleOpenModalLogin, userProfile }: any = useAuth();
  const navigate = useNavigate();
  const adNode = (idx: number, node: any) => {
    if (node) {
      // @ts-ignore: Object is possibly 'null'.
      canPlayRefs.current[idx] = node;
    }
  };
  const handleClick = (route: string, isLogged: boolean, _id: string) => {
    if (userProfile._id) {
      navigate(route);
    } else {
      if (!isLogged) navigate(route);
      else {
        handleOpenModalLogin();
      }
    }
  };
  return (
    <div>
      <span
        className={`ml-4 xl:block lg:block font-medium uppercase text-xs pt-3 ${
          isToggle ? "block" : "hidden"
        } ${styles.sideBar.active.textColor}`}
      >
        Thư viện
      </span>
      <ul
        className={`p-3 ${
          isToggle ? "w-64" : widthDefaultValue
        } xl:w-auto lg:w-auto`}
      >
        {data.map((item, index) => (
          <div
            onClick={() => {
              handleClick("/mymusic", item.isLogged, item.id);
            }}
            key={index}
          >
            <li
              key={item.id}
              className={`flex items-center ${
                isToggle ? "justify-start" : "justify-center"
              } xl:justify-start lg:justify-start ${
                styles.sideBar.hover.text
              } cursor-pointer px-2 py-3  ${styles.sideBar.textColor} `}
            >
              <img src={item.icon} className={`${iconStyles}`} />
              <span
                className={`ml-2 text-xs xl:block lg:block  ${
                  isToggle ? "block" : "hidden"
                }`}
              >
                {item.title}
              </span>
              <div
                className="ml-auto  xl:hidden lg:hidden hidden"
                ref={(node) => adNode(index, node)}
              >
                {item.canPlay ? item.canPlay : ""}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
