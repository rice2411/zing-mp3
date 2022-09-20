import React from "react";
import Scrollbar from "../../../../shared/small_components/Scrollbar";
import Items from "./items";
import { data } from "./items/data";
import CTAButton from "./ctxButton";
import Library from "./library";

export default function BodySideBar({ route, isToggle }: any) {
  return (
    <>
      <Items
        data={data.noScroll}
        className="pb-3  "
        route={route}
        isToggle={isToggle}
      />
      <div className="px-3 ">
        <div className="border-b border-gray-700"></div>
      </div>
      <Scrollbar isHover={true} className="h-[300px] ">
        <Items
          data={data.scroll}
          className="pt-3"
          route={route}
          isToggle={isToggle}
        />
        <div className="pl-3 pb-3 xl:pb-0 lg:pb-0">
          <CTAButton />
        </div>
        <Library isToggle={isToggle} />
      </Scrollbar>
    </>
  );
}
