import React, { useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useTheme from "../../../../../hooks/useTheme";
import BlankModal from "../../../../../shared/small_components/Modal/Blank";
import Button from "../../../../../shared/small_components/Button/Basic";
import LibraryService from "../../../../../service/library";
import { useNavigate } from "react-router-dom";

const AddPLayList = () => {
  const { styles }: any = useTheme();
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [name, setName] = useState("");

  const handleChagne = (e: any) => {
    setName(e.target.value);
  };

  const handleCreatePlaylist = async () => {
    const param = {
      name: name,
    };
    try {
      const response: any = await LibraryService.createPLaylist(param);
      if (response?.data?.data) {
        navigate("/album", { state: { albumId: response?.data?.data._id } });
        setIsOpenModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        style={{ borderColor: styles.sideBar.divide.color }}
        onClick={() => {
          setIsOpenModal(true);
        }}
        className={`${styles.sideBar.textColor} ${styles.sideBar.hover.text} hidden xl:flex xl lg:flex justify-center items-center  cursor-pointer w-[-webkit-fill-available] p-3 pt-3 text-base  font-medium  border-t `}
      >
        <AiOutlinePlus />
        <span className="ml-2 "> Tạo playlist mới</span>
      </div>{" "}
      <BlankModal
        isShow={isOpenModal}
        handleClose={() => {
          setIsOpenModal(false);
        }}
        className={`bg-[#34224F] w-[340px]`}
        isShowHeader={true}
        classHeader="!border-b-0 h-1 p-1"
        isShowDivide={false}
      >
        <div className="flex flex-col items-center  justify-center text-center text-xs w-full">
          <span className="font-bold text-xl">Tạo playlist mới</span>
          <input
            type="text"
            onChange={handleChagne}
            className={`block bg-[#493961]  focus:ring-0 my-2 w-full text-sm border-none  rounded-2xl border focus:border-transparent `}
            placeholder="Nhập tên playlist"
          />

          <Button
            text="Tạo mới"
            isActive={true}
            isDisabled={name == ""}
            className={`${
              name == "" ? " cursor-not-allowed opacity-50" : ""
            } w-full uppercase font-bold p-2 rounded-full bg-[#9B4DE0] text-white mt-2`}
            onClick={() => {
              handleCreatePlaylist();
            }}
          />
        </div>
      </BlankModal>
    </>
  );
};

export default AddPLayList;
