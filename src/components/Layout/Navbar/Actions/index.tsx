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
import { TbError404Off, TbShieldCheck } from "react-icons/tb";
import { HiOutlineBan } from "react-icons/hi";
import { Logout } from "../../../../utils/auth";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { getFile } from "../../../../constant/file";
import Divide from "../../../../shared/small_components/Divide";
import { Link } from "react-router-dom";

const Actions = () => {
  const { styles, theme, color, handleChangeTheme }: any = useTheme();
  const { setIsAuthenticated, userProfile }: any = useAuth();

  const classButton = `text-xs py-1 px-6 border border-[hsla(0,0%,100%,0.1)] ${styles.dropdown.textColor}  rounded-full !text-white`;
  const activeButtonClass = [`${styles.button.backgroundColor}`];

  const { handleModalBlank }: any = useModal();
  const { handleOpenModalLogin, isAuthenticated }: any = useAuth();

  const [isOpenModalTheme, setIsOpenModalTheme] = useState(false);
  const [isOpenModalIntro, setIsOpenModalIntro] = useState(false);
  const [isOpenModal404, setIsOpenModal404] = useState(false);

  const [isShowDropdownProfile, setIsShowDropdownProfile] = useState(false);
  const [isShowDropdownSetting, setIsShowDropdownSetting] = useState(false);

  const dropdownProfileRef = useRef(null);
  const dropdownSettingRef = useRef(null);

  const buttonActiveDropdownProfile = useRef(null);
  const buttonACtiveDropdownSetting = useRef(null);

  const dropDownItemClass = `${styles.dropdown.hover.backgroundColor} rounded block px-4 py-2  flex text-xs  items-center`;
  const dropDownIconClass = `h-[20px] w-[20px] mr-2`;

  const closeOpenMenus = (e: any) => {
    if (buttonActiveDropdownProfile?.current?.contains(e.target)) {
      return;
    }
    if (buttonACtiveDropdownSetting?.current?.contains(e.target)) {
      return;
    }
    if (
      dropdownSettingRef?.current &&
      isShowDropdownSetting &&
      !dropdownSettingRef?.current.contains(e.target)
    ) {
      setIsShowDropdownSetting(false);
    }
    if (
      dropdownProfileRef?.current &&
      isShowDropdownProfile &&
      !dropdownProfileRef?.current?.contains(e.target)
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

  const handleOpenModal404 = () => {
    handleModalBlank({
      text: {
        title: "Xin lỗi",
      },
      onSubmit: null,
    });
    setIsOpenModal404(true);
  };

  const handleCloseModal404 = () => {
    setIsOpenModal404(false);
  };

  const handleCloseModalIntro = () => {
    setIsOpenModalIntro(false);
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
      <ButtonIcon
        refButton={buttonACtiveDropdownSetting}
        onClick={() => {
          handleShowDropdownSetting(!isShowDropdownSetting);
        }}
        className={`${styles.navbar.item.backgroundColor} ${styles.navbar.item.hover.backgroundColor}  rounded-full h-10 w-10`}
      >
        <FiSettings />
      </ButtonIcon>
      <div className="relative mt-10">
        <div
          ref={dropdownSettingRef}
          className={`${isShowDropdownSetting ? "" : "hidden"} ${
            styles.dropdown.backgroundColor
          } ${
            styles.dropdown.textColor
          } z-10   rounded-lg shadow   absolute right-0 mt-3 w-[228px] py-0.5 px-2`}
        >
          <ul className="py-2 text-sm  ">
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
              <Divide />
            </DropdownItem>
            <DropdownItem>
              <a
                href="#"
                className={`${dropDownItemClass} ${styles.dropdown.subTextColor} `}
                onClick={() => {
                  setIsOpenModalIntro(true);
                }}
              >
                <AiOutlineInfoCircle className={`${dropDownIconClass}`} />
                Giới thiệu
              </a>
            </DropdownItem>
            <DropdownItem>
              <a
                href="#"
                onClick={() => {
                  handleOpenModal404();
                }}
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
                onClick={() => {
                  handleOpenModal404();
                }}
                className={`${dropDownItemClass} ${styles.dropdown.subTextColor}`}
              >
                <RiAdvertisementLine className={`${dropDownIconClass}`} />
                Quảng cáo
                <BsArrowUpRight className="ml-auto" />
              </a>
            </DropdownItem>
            <DropdownItem>
              <Link
                to={`/dieu-khoan-su-dung`}
                target="_blank"
                className={`${dropDownItemClass} ${styles.dropdown.subTextColor}`}
              >
                <CgFileDocument className={`${dropDownIconClass}`} />
                Thoả thuận sử dụng
                <BsArrowUpRight className="ml-auto" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                to={`/chinh-sach-bao-mat`}
                target="_blank"
                className={`${dropDownItemClass} ${styles.dropdown.subTextColor}`}
              >
                <TbShieldCheck className={`${dropDownIconClass}`} />
                Chính sách bảo mật
                <BsArrowUpRight className="ml-auto" />
              </Link>
            </DropdownItem>
          </ul>
        </div>
      </div>

      {isAuthenticated ? (
        <Dropdown
          dropdownRef={dropdownProfileRef}
          className="absolute right-0 mt-3 w-[228px] py-0.5 px-2"
          isShow={isShowDropdownProfile}
        >
          <DropdownButton>
            <div
              ref={buttonActiveDropdownProfile}
              onClick={() => {
                handleShowDropdownProfile(!isShowDropdownProfile);
              }}
              className="h-10 w-10 flex flex-col items-center justify-center relative cursor-pointer"
            >
              <img
                src={getFile(userProfile?.avatar)}
                className={`rounded-full  p-0.5 ${
                  userProfile?.is_vip && " border-[#fccc2e] border-2"
                }  `}
                alt=""
              />
              {userProfile?.is_vip && (
                <div className="vip_label  absolute bottom-0"></div>
              )}
            </div>
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
            <Link to="/mua-vip" className={`${dropDownItemClass} mt-3`}>
              <RiVipLine className={`${dropDownIconClass}`} />
              Mua code VIP
              <BsArrowUpRight className="ml-auto" />
            </Link>
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
            <Divide />
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

      <BlankModal
        isShow={isOpenModalTheme}
        handleClose={handleCloseModalTheme}
        className="w-[1000px]"
      >
        {data.map((item, index) => (
          <h2 key={index + item.id}>{renderChildrenTheme(item)}</h2>
        ))}
      </BlankModal>
      <BlankModal
        isShow={isOpenModalIntro}
        handleClose={handleCloseModalIntro}
        className={`bg-[#34224F] w-[340px]`}
        isShowHeader={false}
      >
        <div className="flex flex-col items-center  justify-center text-center text-xs w-full">
          <img src="/icon/logo.svg" className="h-[40px] w-[120px]" />
          <div className="my-3">
            Giấy phép mạng xã hội: 157/GP-BTTTT do Bộ Thông tin và Truyền thông
            cấp ngày 24/4/2019
          </div>
          <div className="my-3">
            Chủ quản: Công Ty Cổ Phần VNG Z06 Đường số 13, phường Tân Thuận
            Đông, quận 7, thành phố Hồ Chí Minh, Việt Nam
          </div>
          <Button
            text="Đóng"
            isActive={true}
            activeClass={`${activeButtonClass} w-[250px] uppercase font-bold py-2 rounded-full`}
            onClick={handleCloseModalIntro}
          />
        </div>
      </BlankModal>
      <BlankModal isShow={isOpenModal404} handleClose={handleCloseModal404}>
        <div
          className={`flex flex-col text-center items-center ${styles.dropdown.subTextColor}`}
        >
          <TbError404Off className="h-40 w-40" />
          Chức năng đang được phát triển
          <div></div>
        </div>
      </BlankModal>
    </div>
  );
};

export default Actions;
