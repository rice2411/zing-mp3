import React from "react";
import ButtonIcon from "../../../../shared/small_components/Button";
import { FaTshirt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineUpload } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import useTheme from "../../../../hooks/useTheme";
import useModal from "../../../../hooks/useModal";
import BlankModal from "../../../../shared/small_components/Modal/Blank";
import ThemeOption from "./Theme";
import { data } from "./Theme/data";
const Actions = () => {
  const { styles, theme, color, handleChangeTheme }: any = useTheme();

  const { handleModalBlank }: any = useModal();
  const handleKeepingTheme = () => {
    handleChangeTheme(theme, color);
  };
  const handleOpenModalTheme = () => {
    handleModalBlank({
      isShow: true,
      text: {
        title: "Giao diện",
      },
      onSubmit: handleKeepingTheme,
    });
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
        {data.map((item, index) => (
          <h2 key={index + item.id}>{renderChildrenTheme(item)}</h2>
        ))}
      </BlankModal>
    </div>
  );
};

export default Actions;
