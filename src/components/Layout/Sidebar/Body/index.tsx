import React from "react";
import Scrollbar from "../../../../shared/small_components/Scrollbar";
import Items from "./Items";
import { data } from "./Items/data";
import CTAButton from "./ctxButton";
import Library from "./Library";
import useTheme from "../../../../hooks/useTheme";
import useAudio from "../../../../hooks/useAudio";
import useAuth from "../../../../hooks/useAuth";

export default function BodySideBar({ isToggle }: any) {
  const { styles }: any = useTheme();
  const { songId }: any = useAudio();
  const { userProfile }: any = useAuth();
  return (
    <>
      <Items data={data.noScroll} className="pb-3  " isToggle={isToggle} />
      <div className="px-3 ">
        <div
          className="border-b"
          style={{ borderColor: styles.sideBar.divide.color }}
        ></div>
      </div>
      <Scrollbar
        isHover={true}
        className={`${songId ? "h-[300px]" : ""}  overflow-x-hidden `}
      >
        <Items data={data.scroll} className="pt-3" isToggle={isToggle} />
        {!userProfile?.is_vip && (
          <div className="pl-3 pb-3 xl:pb-0 lg:pb-0">
            <CTAButton />
          </div>
        )}

        <Library isToggle={isToggle} />
      </Scrollbar>
    </>
  );
}
