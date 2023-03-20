import React, { useState, useRef, useEffect } from "react";
import ButtonIcon from "../../../../shared/small_components/Button/Icon";
import { FaBrush, FaTshirt } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

import { FiLogOut, FiSettings } from "react-icons/fi";
import useTheme from "../../../../hooks/useTheme";
import useModal from "../../../../hooks/useModal";
import BlankModal from "../../../../shared/small_components/Modal/Blank";
import ThemeOption from "./Theme";
import { data } from "./Theme/data";
import Button from "../../../../shared/small_components/Button/Basic";
import useAuth from "../../../../hooks/useAuth";
import Dropdown from "../../../../shared/small_components/DropDown";
import DropdownButton from "../../../../shared/small_components/DropDown/Button";
import DropdownItem from "../../../../shared/small_components/DropDown/Item";
import { RiAdvertisementLine, RiVipFill, RiVipLine } from "react-icons/ri";
import { BsArrowUpRight, BsTelephone, BsUpload } from "react-icons/bs";
import { TbShieldCheck } from "react-icons/tb";
import { HiOutlineBan } from "react-icons/hi";
import { Logout } from "../../../../utils/auth";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { getFile } from "../../../../constant/file";

const Actions = () => {
  const { styles, theme, color, handleChangeTheme }: any = useTheme();
  const { setIsAuthenticated, userProfile }: any = useAuth();

  const classButton = `text-xs py-1 px-6 border border-[hsla(0,0%,100%,0.1)] ${styles.dropdown.textColor}  rounded-full !text-white`;
  const activeButtonClass = [`${styles.button.backgroundColor}`];

  const { handleModalBlank }: any = useModal();
  const { handleOpenModalLogin, isAuthenticated }: any = useAuth();

  const [isOpenModalTheme, setIsOpenModalTheme] = useState(false);
  const [isShowDropdownProfile, setIsShowDropdownProfile] = useState(false);
  const [isShowDropdownSetting, setIsShowDropdownSetting] = useState(false);

  const dropdownProfileRef = useRef(null);
  const dropdownSettingRef = useRef(null);

  const buttonActiveDropdownProfile = useRef(null);
  const buttonACtiveDropdownSetting = useRef(null);

  const dropDownItemClass = `${styles.dropdown.hover.backgroundColor} rounded block px-4 py-2  flex text-xs  items-center`;
  const dropDownIconClass = `h-[20px] w-[20px] mr-2`;
  const closeOpenMenus = (e: any) => {
    if (buttonActiveDropdownProfile.current.contains(e.target)) {
      return;
    }
    if (buttonACtiveDropdownSetting.current.contains(e.target)) {
      return;
    }
    if (
      dropdownSettingRef.current &&
      isShowDropdownSetting &&
      !dropdownSettingRef.current.contains(e.target)
    ) {
      setIsShowDropdownSetting(false);
    }
    if (
      dropdownProfileRef.current &&
      isShowDropdownProfile &&
      !dropdownProfileRef.current.contains(e.target)
    ) {
      setIsShowDropdownProfile(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);

  const handleShowDropdownProfile = (isShow: boolean) => {
    setIsShowDropdownProfile(isShow);
    if (isShow) {
      setIsShowDropdownSetting(false);
    }
  };
  const handleShowDropdownSetting = (isShow: boolean) => {
    setIsShowDropdownSetting(isShow);
    if (isShow) {
      setIsShowDropdownProfile(false);
    }
  };

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
              handleCloseModalTheme={handleCloseModalTheme}
              key={item.id + index}
              data={_item}
              theme={item.theme}
            />
          ))}
        </div>
      </div>
    );
  };
  const handleLogout = () => {
    Logout();
    setIsAuthenticated(false);
  };
  return (
    <div className="ml-auto  gap-x-2 flex">
      <Dropdown
        className="absolute right-0 mt-3 w-[228px] py-0.5 px-2"
        dropdownRef={dropdownSettingRef}
        isShow={isShowDropdownSetting}
      >
        <DropdownButton>
          <ButtonIcon
            refButton={buttonACtiveDropdownSetting}
            onClick={() => {
              handleShowDropdownSetting(!isShowDropdownSetting);
            }}
            className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor}  rounded-full h-10 w-10`}
          >
            <FiSettings />
          </ButtonIcon>
        </DropdownButton>
        <DropdownItem>
          <a
            href="#"
            className={`${dropDownItemClass} `}
            onClick={handleOpenModalTheme}
          >
            <FaBrush className={`${dropDownIconClass}`} />
            Giao diện
            <MdOutlineKeyboardArrowRight className="ml-auto" />
          </a>
        </DropdownItem>
        <DropdownItem>
          <div
            className={` border-t-[1px] border-[${styles.dropdown.borderColor}] my-2`}
          ></div>
        </DropdownItem>
        <DropdownItem>
          <a
            href="#"
            className={`${dropDownItemClass} ${styles.dropdown.subTextColor} `}
          >
            <AiOutlineInfoCircle className={`${dropDownIconClass}`} />
            Giới thiệu
          </a>
        </DropdownItem>
        <DropdownItem>
          <a
            href="#"
            className={`${dropDownItemClass} ${styles.dropdown.subTextColor}`}
          >
            <BsTelephone className={`${dropDownIconClass}`} />
            Liên hệ
            <BsArrowUpRight className="ml-auto" />
          </a>
        </DropdownItem>
        <DropdownItem>
          <a
            href="#"
            className={`${dropDownItemClass} ${styles.dropdown.subTextColor}`}
          >
            <RiAdvertisementLine className={`${dropDownIconClass}`} />
            Quảng cáo
            <BsArrowUpRight className="ml-auto" />
          </a>
        </DropdownItem>
        <DropdownItem>
          <a
            href="#"
            className={`${dropDownItemClass} ${styles.dropdown.subTextColor}`}
          >
            <CgFileDocument className={`${dropDownIconClass}`} />
            Thoả thuận sử dụng
            <BsArrowUpRight className="ml-auto" />
          </a>
        </DropdownItem>
        <DropdownItem>
          <a
            href="#"
            className={`${dropDownItemClass} ${styles.dropdown.subTextColor}`}
          >
            <TbShieldCheck className={`${dropDownIconClass}`} />
            Chính sách bảo mật
            <BsArrowUpRight className="ml-auto" />
          </a>
        </DropdownItem>
      </Dropdown>

      {isAuthenticated ? (
        <Dropdown
          dropdownRef={dropdownProfileRef}
          className="absolute right-0 mt-3 w-[228px] py-0.5 px-2"
          isShow={isShowDropdownProfile}
        >
          <DropdownButton>
            <a
              ref={buttonActiveDropdownProfile}
              onClick={() => {
                handleShowDropdownProfile(!isShowDropdownProfile);
              }}
              href="#"
              className="h-10 w-10 flex flex-col items-center justify-center relative"
            >
              <img
                src={getFile(userProfile.avatar)}
                className="rounded-full  p-0.5 border border-[#fccc2e] border-2 "
                alt=""
              />
              <div className="vip_label  absolute bottom-0"></div>
            </a>
          </DropdownButton>
          <DropdownItem>
            <p
              className={`${styles.dropdown.subTextColor} pb-2 text-xs text-center border-b-[1px] border-[${styles.dropdown.borderColor}]`}
            >
              Gói VIP sẽ hết hạn <br />
              vào ngày
              <span className={`${styles.dropdown.textColor}`}> 20/3/2023</span>
            </p>
          </DropdownItem>

          <DropdownItem>
            <a href="#" className={`${dropDownItemClass} mt-3`}>
              <RiVipLine className={`${dropDownIconClass}`} />
              Mua code VIP
              <BsArrowUpRight className="ml-auto" />
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="#" className={`${dropDownItemClass}`}>
              <HiOutlineBan className={`${dropDownIconClass}`} />
              Danh sách chặn
            </a>
          </DropdownItem>
          <DropdownItem>
            <a href="#" className={`${dropDownItemClass} mb-3 `}>
              <BsUpload className={`${dropDownIconClass} `} />
              Tải lên
            </a>
          </DropdownItem>
          <DropdownItem>
            <div
              className={` border-t-[1px] border-[${styles.dropdown.borderColor}]`}
            ></div>
          </DropdownItem>
          <DropdownItem>
            <a
              onClick={handleLogout}
              href="#"
              className={`${dropDownItemClass} mt-3`}
            >
              <FiLogOut className={`${dropDownIconClass} `} />
              Đăng xuất
            </a>
          </DropdownItem>
        </Dropdown>
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
