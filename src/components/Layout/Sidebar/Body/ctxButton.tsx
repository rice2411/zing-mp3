import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function CTAButton() {
  const { handleOpenModalLogin, userProfile }: any = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    if (userProfile._id) navigate("/mua-vip");
    else handleOpenModalLogin();
  };
  return (
    <div
      className="xl:block lg:block flex-col text-center p-4 mt-6 rounded w-[230px] hidden "
      style={{
        backgroundImage: "linear-gradient(117deg,#5a4be7,#c86dd7 102%)",
      }}
    >
      <p className="mb-1.5 text-sm text-white font-medium">
        Nghe nhạc không quảng cáo cùng kho nhạc VIP
      </p>
      <button
        onClick={handleClick}
        type="button"
        className="text-black bg-yellow-300  font-medium rounded-full text-sm px-10 py-1.5 text-center "
      >
        Nâng cấp vip
      </button>
    </div>
  );
}
