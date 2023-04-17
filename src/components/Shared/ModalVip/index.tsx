import React from "react";
import BlankModal from "../../../shared/small_components/Modal/Blank";
import Button from "../../../shared/small_components/Button/Basic";

const ModalVip = ({ isShow, handleClose }: any) => {
  return (
    <BlankModal
      isShow={isShow}
      handleClose={handleClose}
      className={`bg-[#34224F] w-[340px]`}
      classHeader={`!border-0 p-0`}
      isShowHeader={true}
    >
      <div className="flex flex-col items-center  justify-center text-center w-full pb-5">
        <div className=" text-xl font-bold">Dành Cho Tài Khoản Vip</div>
        <div className="my-3 text-[hsla(0,0%,100%,0.5)] text-sm">
          Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP để
          nghe bài hát này.
        </div>
        <Button
          text="NÂNG CẤP VIP"
          className={`bg-[#f8e71c] text-black w-full rounded-full  py-2`}
          // activeClass={`${activeButtonClass} w-[250px] uppercase font-bold py-2 rounded-full`}
          // onClick={handleCloseModalIntro}
        />
      </div>
    </BlankModal>
  );
};

export default ModalVip;
