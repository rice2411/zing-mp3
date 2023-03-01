import React, { useLayoutEffect, useRef } from "react";

import useTheme from "../../../hooks/useTheme";

export default function Scrollbar({
    isHover,
    className,
    scrollBarRef,
    ...props
}: any) {
    const scrollRef = useRef(null);
    const { styles, theme }: any = useTheme();
    const scrollBarStyle = `.scroll-bar::-webkit-scrollbar-thumb {  background: ${styles.scrollBar.color};} .scroll-bar:hover::-webkit-slider-thumb {  background: ${styles.scrollBar.color};}`;

    const handleMouseEnter = () => {
        // const style = document.getElementById("scrollbarStyle");
        // style.innerHTML = `.scroll-bar::-webkit-scrollbar-thumb {  background: ${styles.scrollBar.color};} .scroll-bar:hover::-webkit-slider-thumb {  background: ${styles.scrollBar.color};}`;
        // @ts-ignore: Object is possibly 'null'.
        // scrollRef.current.classList.remove("overflow-hidden");
        // @ts-ignore: Object is possibly 'null'.
        // scrollRef.current.classList.add("scroll-bar");
        // @ts-ignore: Object is possibly 'null'.
        // scrollRef.current.classList.add("overflow-auto");

        scrollRef.current.classList.remove("scroll-hidden");
    };
    const handleMouseLeave = () => {
        // const style = document.getElementById("scrollbarStyle");
        // style.innerHTML = "";
        // @ts-ignore: Object is possibly 'null'.
        // scrollRef.current.classList.remove("scroll-bar");
        // @ts-ignore: Object is possibly 'null'.
        // scrollRef.current.classList.add("overflow-hidden");
        // @ts-ignore: Object is possibly 'null'.
        // scrollRef.current.classList.remove("overflow-auto");

        scrollRef.current.classList.add("scroll-hidden");
    };

    return (
        <>
            <style id="scrollbarStyle" type="text/css">
                {scrollBarStyle}
            </style>
            <div
                className={`scroll-bar overflow-auto  ${
                    className ? className : ""
                }`}
                ref={scrollRef}
                onMouseEnter={isHover ? handleMouseEnter : () => {}}
                onMouseLeave={isHover ? handleMouseLeave : () => {}}
            >
                {props.children}
            </div>
        </>
    );
}
