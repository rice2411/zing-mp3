import React from "react";
import Scrollbar from "../../../../shared/small_components/Scrollbar";
import Items from "./items";
import { data } from "./items/data";
import CTAButton from "./ctxButton";
import Library from "./library";
import useTheme from "../../../../hooks/useTheme";

export default function BodySideBar({ isToggle }: any) {
  const { styles }: any = useTheme();
  return (
    <>
      <Items data={data.noScroll} className="pb-3  " isToggle={isToggle} />
      <div className="px-3 ">
        <div
          className="border-b"
          style={{ borderColor: styles.sideBar.divide.color }}
        ></div>
      </div>
      <Scrollbar isHover={true} className="h-[300px] ">
        <Items data={data.scroll} className="pt-3" isToggle={isToggle} />
        <div className="pl-3 pb-3 xl:pb-0 lg:pb-0">
          <CTAButton />
        </div>
        <Library isToggle={isToggle} />
      </Scrollbar>
    </>
  );
}
