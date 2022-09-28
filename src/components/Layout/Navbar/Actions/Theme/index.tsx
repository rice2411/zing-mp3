import React, { useRef } from "react";
import useModal from "../../../../../hooks/useModal";
import useTheme from "../../../../../hooks/useTheme";
import { data } from "./data";

const ThemeOption = ({ data, theme }: any) => {
  const { styles, handleChangeTheme }: any = useTheme();
  const { handleModalBlank }: any = useModal();
  const themeRef = useRef(null);
  const handleMouseEnter = () => {
    themeRef.current.classList.remove("hidden");
    themeRef.current.classList.add("flex");
  };
  const handleMouseLeave = () => {
    themeRef.current.classList.remove("flex");
    themeRef.current.classList.add("hidden");
  };
  const handleApplyTheme = () => {
    handleModalBlank({ isShow: false });
    handleChangeTheme(theme, data.color);
  };
  const handlePreviewTheme = () => {
    handleChangeTheme(theme, data.color);
  };
  return (
    <div
      className="relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`hidden bg-gray-900 bg-opacity-50 h-20 w-full absolute  items-center justify-center flex-col gap-y-2  cursor-pointer text-white`}
        ref={themeRef}
      >
        <div className="px-2 w-full">
          <button
            className={`text-[10px] rounded-3xl ${styles.modal.button.backgroundColor} outline  ${styles.modal.button.borderColor}   w-full `}
            onClick={handleApplyTheme}
          >
            Áp dụng
          </button>
          <button
            className="text-[10px] rounded-3xl outline outline-offset-2 outline-1  w-full"
            onClick={handlePreviewTheme}
          >
            Xem trước
          </button>
        </div>
      </div>
      <img src={data.image} className="h-20 rounded" />
      <span className="text-xs">{data.name}</span>
    </div>
  );
};

export default ThemeOption;
