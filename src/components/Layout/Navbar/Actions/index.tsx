import React from "react";
import ButtonIcon from "../../../../shared/small_components/Button";
import { FaTshirt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineUpload } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import useTheme from "../../../../hooks/useTheme";
const Actions = () => {
  const { styles }: any = useTheme();
  return (
    <div className="ml-auto mr-10 gap-x-2 flex">
      <ButtonIcon className={`${styles.navbar.item.backgroundColor} h-10 w-10`}>
        <FaTshirt />
      </ButtonIcon>
      <ButtonIcon className={`${styles.navbar.item.backgroundColor} h-10 w-10`}>
        <IoDiamondOutline />
      </ButtonIcon>
      <ButtonIcon className={`${styles.navbar.item.backgroundColor} h-10 w-10`}>
        <AiOutlineUpload />
      </ButtonIcon>
      <ButtonIcon className={`${styles.navbar.item.backgroundColor} h-10 w-10`}>
        <FiSettings />
      </ButtonIcon>
      <ButtonIcon className={`${styles.navbar.item.backgroundColor} h-10 w-10`}>
        <FaTshirt />
      </ButtonIcon>
    </div>
  );
};

export default Actions;
