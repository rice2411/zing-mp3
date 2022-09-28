import React from "react";
import ButtonIcon from "../../../../shared/small_components/Button";
import { FaTshirt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineUpload } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import useTheme from "../../../../hooks/useTheme";
import useModal from "../../../../hooks/useModal";
import BlankModal from "../../../../shared/small_components/Modal/Blank";
const Actions = () => {
  const { styles, handleChangeTheme }: any = useTheme();
  const { handleModalBlank }: any = useModal();
  const handleOpenModalTheme = () => {
    handleModalBlank({
      isShow: true,
      text: {
        title: "Giao diện",
      },
    });
  };

  return (
    <div className="ml-auto  gap-x-2 flex">
      <ButtonIcon
        onClick={handleOpenModalTheme}
        className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor} h-10 w-10`}
      >
        <FaTshirt />
      </ButtonIcon>
      <ButtonIcon
        className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor}  h-10 w-10`}
      >
        <IoDiamondOutline />
      </ButtonIcon>
      <ButtonIcon
        className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor}  h-10 w-10`}
      >
        <AiOutlineUpload />
      </ButtonIcon>
      <ButtonIcon
        className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor}  h-10 w-10`}
      >
        <FiSettings />
      </ButtonIcon>
      <ButtonIcon
        className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor}  h-10 w-10`}
      >
        <FaTshirt />
      </ButtonIcon>
      <BlankModal>
        <button
          onClick={() => {
            handleChangeTheme("dark", "red");
          }}
        >
          RED
        </button>
        <button
          onClick={() => {
            handleChangeTheme("dark", "purple");
          }}
        >
          PURPLE
        </button>
        <button
          onClick={() => {
            handleChangeTheme("light", "light green");
          }}
        >
          LIGHT GREEN
        </button>
      </BlankModal>
    </div>
  );
};

export default Actions;
