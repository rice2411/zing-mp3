import React, { useRef } from "react";
import { textStyles, widthDefaultValue } from "../../styles";
import "./styles.scss";
export default function Items({ data, className, route, isToggle }: any) {
  const canPlayRefs = useRef([]);
  const adNode = (idx: number, node: any) => {
    if (node) {
      // @ts-ignore: Object is possibly 'null'.
      canPlayRefs.current[idx] = node;
    }
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
  return (
    <ul
      className={`w-${
        isToggle ? "64" : widthDefaultValue
      } xl:w-auto lg:w-auto space-y-2 ${
        className ? className : className
      } ${textStyles}`}
    >
      {data.map((item: any, index: number) => (
        <li
          key={item.id}
          className={`xl:block lg:block  flex ${
            isToggle ? "justify-start" : "justify-center"
          } hover:text-white px-3 ${route === item.route ? "active" : ""} `}
          onMouseEnter={() => hanldeMouseEnter(index)}
          onMouseLeave={() => hanldeMouseLeave(index)}
        >
          <a
            href="/home"
            className="flex items-center p-2 text-base  rounded-lg transition duration-7"
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
          </a>
        </li>
      ))}
    </ul>
  );
}
