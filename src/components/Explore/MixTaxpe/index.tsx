import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useTheme from "../../../hooks/useTheme";
import { data } from "./data";

const MixTape = () => {
  const { styles }: any = useTheme();
  const buttonStyle = {
    display: "none",
  };

  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>,
  };
  const style = {
    height: "64px",
    overflow: "hidden",
    position: "relative",
    marginTop: "auto",
    background: " rgba(0,0,0,.3)",
    borderRadius: "0 0 6px 6px",
  } as React.CSSProperties;
  return (
    <div className="mb-28">
      <h2 className={`${styles.body.textColor} text-xl font-bold mb-3 mt-5`}>
        MixTape Yêu Thích
      </h2>
      <div className=" flex justify-between ">
        {" "}
        {data.map((item, index) => (
          <div className="max-w-[200px] h-[213px] ">
            <Fade autoplay={true} duration={2000} {...properties}>
              {item.images.map((img, idx) => (
                <>
                  {" "}
                  <div className="each-slide-effect w-auto h-auto">
                    <div
                      style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                      }}
                      className="w-[200px] h-[213px] rounded-t-lg "
                    ></div>
                  </div>
                  <div
                    className=" rounded-b-lg"
                    style={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      height: "64px ",
                    }}
                  >
                    <div
                      className="z-50 px-2 py-3 rounded-b-lg h-full      "
                      style={{ backdropFilter: "blur(100px) saturate(30%)" }}
                    >
                      <p
                        className={`text-white  font-bold  text-sm ${
                          item?.authors ? "leading-3" : ""
                        }`}
                      >
                        {item.name}
                      </p>
                      <span className="text-xs text-gray-200 font-light ">
                        {item?.authors?.map((auth) => (
                          <>{auth},</>
                        ))}
                      </span>
                    </div>
                  </div>{" "}
                </>
              ))}
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MixTape;
