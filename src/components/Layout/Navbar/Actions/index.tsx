import React, { useState } from "react";
import ButtonIcon from "../../../../shared/small_components/Button/Icon";
import { FaTshirt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineUpload } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import useTheme from "../../../../hooks/useTheme";
import useModal from "../../../../hooks/useModal";
import BlankModal from "../../../../shared/small_components/Modal/Blank";
import ThemeOption from "./Theme";
import { data } from "./Theme/data";
import Button from "../../../../shared/small_components/Button/Basic";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import useAuth from "../../../../hooks/useAuth";
const Actions = () => {
  const { styles, theme, color, handleChangeTheme }: any = useTheme();
  const classButton = `text-xs hover:text-white py-1 px-6 border border-[hsla(0,0%,100%,0.1)]  rounded-full`;
  const activeButtonClass = [
    "bg-[#9b4de0] hover:bg-[#8B45CA]",
    "hover:opacity-80",
  ];
  const { handleModalBlank }: any = useModal();
  const { handleOpenModalLogin, isAuthenticated }: any = useAuth();

  const [isOpenModalTheme, setIsOpenModalTheme] = useState(false);

  const handleKeepingTheme = () => {
    handleChangeTheme(theme, color);
  };
  const handleOpenModalTheme = () => {
    handleModalBlank({
      text: {
        title: "Giao diện",
      },
      onSubmit: handleKeepingTheme,
    });
    setIsOpenModalTheme(true);
  };
  const handleCloseModalTheme = () => {
    setIsOpenModalTheme(false);
  };

  const renderChildrenTheme = (item: any) => {
    return (
      <div className="mb-5">
        <h2 className="font-bold text-md pb-3">{item.name}</h2>
        <div className="flex gap-x-4">
          {item.children.map((_item: any, index: number) => (
            <ThemeOption
              key={item.id + index}
              data={_item}
              theme={item.theme}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="ml-auto  gap-x-2 flex">
      <ButtonIcon
        onClick={handleOpenModalTheme}
        className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor} rounded-full h-10 w-10`}
      >
        <FaTshirt />
      </ButtonIcon>
      <ButtonIcon
        className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor}  rounded-full h-10 w-10`}
      >
        <IoDiamondOutline />
      </ButtonIcon>

      <ButtonIcon
        className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor}  rounded-full h-10 w-10`}
      >
        <FiSettings />
      </ButtonIcon>
      {isAuthenticated ? (
        <div className="h-10 w-10 flex flex-col items-center justify-center relative">
          <img
            src="https://s120.avatar.talk.zdn.vn/9/9/2/2/25/120/6a9dcd0606bf38a33e772894ae90ebdf.jpg"
            className="rounded-full  p-0.5 border border-[#fccc2e] border-2 "
            alt=""
          />
          <div className="vip_label  absolute bottom-0"></div>
        </div>
      ) : (
        <Button
          text="ĐĂNG NHẬP"
          isActive={true}
          className={classButton}
          activeClass={activeButtonClass}
          onClick={handleOpenModalLogin}
        />
      )}

      <BlankModal isShow={isOpenModalTheme} handleClose={handleCloseModalTheme}>
        {data.map((item, index) => (
          <h2 key={index + item.id}>{renderChildrenTheme(item)}</h2>
        ))}
      </BlankModal>
    </div>
  );
};

export default Actions;
