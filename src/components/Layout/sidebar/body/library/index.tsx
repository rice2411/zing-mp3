import React, { useRef } from "react";
import { iconStyles, textStyles, widthDefaultValue } from "../../styles";
import { data } from "./data";

export default function Library({ isToggle }: any) {
  const canPlayRefs = useRef([]);
  const adNode = (idx: number, node: any) => {
    if (node) {
      // @ts-ignore: Object is possibly 'null'.
      canPlayRefs.current[idx] = node;
    }
  };
  const hanldeMouseEnter = (index: number) => {
    // @ts-ignore: Object is possibly 'null'.
    canPlayRefs.current[index].classList.remove("xl:hidden ");
    // @ts-ignore: Object is possibly 'null'.
    canPlayRefs.current[index].classList.remove("lg:hidden ");

    // @ts-ignore: Object is possibly 'null'.
  };
  const hanldeMouseLeave = (index: number) => {
    // @ts-ignore: Object is possibly 'null'.
    canPlayRefs.current[index].classList.add("xl:hidden");
    // @ts-ignore: Object is possibly 'null'.

    canPlayRefs.current[index].classList.add("lg:hidden");
  };
  return (
    <div>
      <span
        className={`ml-4 xl:block lg:block  text-white font-medium uppercase text-xs pt-3 ${
          isToggle ? "block" : "hidden"
        }`}
      >
        Thư viện
      </span>
      <ul
        className={`p-3 ${
          isToggle ? "64" : widthDefaultValue
        } xl:w-auto lg:w-auto`}
      >
        {data.map((item, index) => (
          <li
            key={item.id}
            className={`flex items-center ${
              isToggle ? "justify-start" : "justify-center"
            } xl:justify-start lg:justify-start hover:text-white cursor-pointer px-2 py-3  ${textStyles} `}
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
        ))}
      </ul>
    </div>
  );
}
