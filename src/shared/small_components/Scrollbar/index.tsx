import React, { useEffect, useRef } from "react";
import useTheme from "../../../hooks/useTheme";

export default function Scrollbar({
  isHover,
  className,
  scrollBarRef,
  ...props
}: any) {
  const scrollRef = useRef(null);
  const { styles, theme }: any = useTheme();
  const handleMouseEnter = () => {
    const style = document.getElementById("scrollbarStyle");
    style.innerHTML = `.scroll-bar::-webkit-scrollbar-thumb {  background: ${styles.scrollBar.color};} .scroll-bar:hover::-webkit-slider-thumb {  background: ${styles.scrollBar.color};}`;
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.remove("overflow-hidden");
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.add("scroll-bar");
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.add("overflow-auto");
  };
  const handleMouseLeave = () => {
    const style = document.getElementById("scrollbarStyle");
    style.innerHTML = "";
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.remove("scroll-bar");
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.add("overflow-hidden");
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.remove("overflow-auto");
  };

  return (
    <>
      <style id="scrollbarStyle" type="text/css"></style>
      <div
        className={`scroll-bar ${
          isHover ? "overflow-hidden" : "overflow-auto"
        }  ${className ? className : ""}`}
        ref={scrollRef}
        onMouseEnter={isHover ? handleMouseEnter : () => {}}
        onMouseLeave={isHover ? handleMouseLeave : () => {}}
      >
        {props.children}
      </div>
    </>
  );
}
