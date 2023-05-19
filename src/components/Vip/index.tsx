import React from "react";
import "./styles.css";
import PaymentService from "../../service/payment";
import UserService from "../../service/user";
import { setUser } from "../../utils/auth";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const VIP = () => {
  const { setUserProfile }: any = useAuth();

  const handlePurchase = async () => {
    try {
      const resposne: any = await PaymentService.zaloPay();
      const rawData = resposne?.data?.data;
      if (rawData) {
        window.location = rawData[0].order_url;
        // const timer = setInterval(async () => {
        //   const check: any = await PaymentService.check({
        //     app_trans_id: rawData[1],
        //     description: rawData[2],
        //   });
        //   const raw = check?.data?.data;
        //   if (raw.return_code == 1) {
        //     const response: any = await UserService.getMe();
        //     if (response?.data?.data) {
        //       setUserProfile(response?.data?.data);
        //       setUser(JSON.stringify(response?.data?.data));
        //       navigate("/");
        //     }
        //     clearInterval(timer);
        //     win.close();
        //   }
        // }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center vip overflow-x-hidden h-[800px] pt-32">
      <h1 className="text-5xl font-bold text-[#873d16]">GÓI CODE VIP</h1>
      <p className="text-[rgba(20,20,20,0.6)] mb-4">
        Mua code VIP và tặng bạn bè để cùng thưởng thức âm nhạc không giới hạn
      </p>
      <div className="bg-white w-[800px] rounded-3xl">
        <div className="p-5">
          {" "}
          <div className="text-black font-bold text-base text-center">
            Gói Zing MP3 VIP
          </div>
          <div className=" py-4 flex justify-between">
            <div className="text-[rgba(20,20,20,0.6)]">Đơn giá</div>
            <div className="">
              <p className="font-bold text-xl">279.000đ</p>
              <p className="line-through text-sm text-[#a1a1a1] text-right">
                354.000đ
              </p>
            </div>
          </div>
          <div className=" py-4  flex justify-between">
            <div className="text-[rgba(20,20,20,0.6)]">Số lượng</div>
            <div className="package-code-count">
              <span id="payment-count">1</span>
            </div>
          </div>
          <div className=" py-4  flex justify-between">
            <div className="text-[rgba(20,20,20,0.6)]">Thành tiền</div>
            <div className="text-[#8947ad] font-bold text-4xl" id="total-price">
              279.000 đ
            </div>
          </div>
          <div className=" py-4  flex justify-between">
            <div className="text-[rgba(20,20,20,0.6)]">
              * Giá trên đã bao gồm VAT
            </div>
            <div
              className="bg-[#FFD94E] rounded-3xl cursor-pointer uppercase font-bold text-[#480c00] w-[224px] h-[44px] flex items-center justify-center"
              onClick={() => {
                handlePurchase();
              }}
            >
              Chọn Mua
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIP;
