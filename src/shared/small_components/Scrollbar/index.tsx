import React, { useRef } from "react";

export default function Scrollbar({ isHover, className, scrollBarRef, ...props }: any) {
  const scrollRef = useRef(null);
  const handleMouseEnter = () => {
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.remove("overflow-hidden");
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.add("scroll-bar");
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.add("overflow-auto");
  };
  const handleMouseLeave = () => {
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.remove("scroll-bar");
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.add("overflow-hidden");
    // @ts-ignore: Object is possibly 'null'.
    scrollRef.current.classList.remove("overflow-auto");
  };
  return (
    <div
      className={`scroll-bar ${isHover ? 'overflow-hidden' : 'overflow-auto'}  ${className ? className : ""}`}
      ref={scrollRef}
      onMouseEnter={isHover ? handleMouseEnter : () => {}}
      onMouseLeave={isHover ? handleMouseLeave : () => {}}
    >
      {props.children}
    </div>
  );
}
