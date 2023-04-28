import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTheme from "../../../../../hooks/useTheme";
import { widthDefaultValue } from "../../styles";
import useAuth from "../../../../../hooks/useAuth";

export default function Items({ data, className, isToggle }: any) {
  const location = useLocation();
  const canPlayRefs = useRef([]);
  const { handleOpenModalLogin }: any = useAuth();
  const navigate = useNavigate();
  const { styles }: any = useTheme();
  const adNode = (idx: number, node: any) => {
    if (node) {
      // @ts-ignore: Object is possibly 'null'.
      canPlayRefs.current[idx] = node;
    }
  };
  const handleClick = (route: string, isLogged: boolean) => {
    if (!isLogged) navigate(route);
    else handleOpenModalLogin();
  };
  const hanldeMouseEnter = (index: number) => {
    // @ts-ignore: Object is possibly 'null'.
    canPlayRefs.current[index].classList.remove("xl:hidden");
    // @ts-ignore: Object is possibly 'null'.
    canPlayRefs.current[index].classList.remove("lg:hidden");

    // @ts-ignore: Object is possibly 'null'.
  };
  const hanldeMouseLeave = (index: number) => {
    // @ts-ignore: Object is possibly 'null'.
    canPlayRefs.current[index].classList.add("xl:hidden");
    // @ts-ignore: Object is possibly 'null'.

    canPlayRefs.current[index].classList.add("lg:hidden");
  };

  const activeItemClass = () => {
    return `font-medium ${styles.sideBar.active.textColor} border-l-[3px]  ${styles.sideBar.active.backgroundColor} `;
  };

  return (
    <ul
      className={`${
        isToggle ? "w-64" : widthDefaultValue
      } xl:w-auto lg:w-auto space-y-2 ${className ? className : className} ${
        styles.sideBar.textColor
      }`}
    >
      {data.map((item: any, index: number) => (
        <li
          key={item.id}
          className={`xl:block lg:block  flex ${
            isToggle ? "justify-start" : "justify-center"
          } ${styles.sideBar.hover.text} px-3 ${
            location.pathname === item.route && !item.isUpdate
              ? activeItemClass()
              : ""
          } `}
          onMouseEnter={() => hanldeMouseEnter(index)}
          onMouseLeave={() => hanldeMouseLeave(index)}
          style={{
            borderColor:
              location.pathname === item.route && !item.isUpdate
                ? styles.sideBar.active.borderColor
                : "",
          }}
        >
          <div
            onClick={() => {
              handleClick(item.route, item.isLogged);
            }}
            className="flex items-center p-2 text-base  rounded-lg transition duration-7 cursor-pointer"
          >
            {item.icon}
            <span
              className={`${
                isToggle ? "block" : "hidden"
              } ml-4 xl:block lg:block  text-xs font-bold `}
            >
              {item.title}
            </span>
            <div
              ref={(node) => adNode(index, node)}
              className="ml-auto xl:hidden lg:hidden hidden "
            >
              {item.canPlay ? item.canPlay : ""}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
