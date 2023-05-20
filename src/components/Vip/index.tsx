import React, { useState } from "react";
import "./styles.css";
import PaymentService from "../../service/payment";
import UserService from "../../service/user";
import { setUser } from "../../utils/auth";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import BlankModal from "../../shared/small_components/Modal/Blank";

const VIP = () => {
  const [isSelected, setIsSelected] = useState("momo");
  const { setUserProfile }: any = useAuth();
  const { handleModalBlank, handleModalConfirm }: any = useModal();
  const handleOpenModal = async () => {
    // await fetchHubdata(modal, item);
    handleModalBlank({
      text: {
        title: "Phương thức thanh toán",
      },
      isShow: true,
      onSubmit: () => {},
    });
  };
  const handlePurchase = async () => {
    try {
      const resposne: any =
        isSelected == "zalopay"
          ? await PaymentService.ZaloPayPayment()
          : await PaymentService.MoMoPayPayment();
      const rawData = resposne?.data?.data;
      if (rawData) {
        window.location =
          isSelected == "zalopay" ? rawData[0].order_url : rawData.payUrl;
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
                handleOpenModal();
              }}
            >
              Chọn Mua
            </div>
          </div>
        </div>
      </div>
      <BlankModal
        className={`bg-white text-black`}
        classHeader={``}
        isShowHeader={true}
      >
        <div className="flex flex-col items-center  justify-center text-center text-xs w-full">
          <div className="flex mb-2">
            {" "}
            <div
              onClick={() => {
                setIsSelected("momo");
              }}
              className={`mr-2 flex p-4 ${
                isSelected == "momo" ? `border-4 border-green-400` : ""
              }  hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer`}
            >
              <div className="flex items-center ">
                <input
                  id="helper-radio-4"
                  name="helper-radio"
                  type="radio"
                  checked={isSelected == "momo"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
              <div className="ml-2 text-sm flex">
                <label
                  htmlFor="helper-radio-4"
                  className="font-medium text-gray-900 dark:text-gray-300 flex"
                >
                  <div className="mr-2">
                    <div>MoMo</div>
                    <p
                      id="helper-radio-text-4"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      Ví điện tử
                    </p>
                  </div>
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Square.png"
                    alt=""
                    className="h-10 w-10"
                  />
                </label>
              </div>
            </div>
            <div
              onClick={() => {
                setIsSelected("zalopay");
              }}
              className={`flex p-4  ${
                isSelected == "zalopay" ? `border-4 border-green-400` : ""
              }  hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer`}
            >
              <div className="flex items-center ">
                <input
                  id="helper-radio-4"
                  name="helper-radio"
                  type="radio"
                  checked={isSelected == "zalopay"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
              </div>
              <div className="ml-2 text-sm flex">
                <label
                  htmlFor="helper-radio-4"
                  className="font-medium text-gray-900 dark:text-gray-300 flex"
                >
                  <div className="mr-2">
                    <div>ZaloPay</div>
                    <p
                      id="helper-radio-text-4"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      Ví điện tử
                    </p>
                  </div>
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay.png"
                    alt=""
                    className="h-10 w-10"
                  />
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            onClick={() => {
              handlePurchase();
            }}
            className="ml-auto focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Xác nhận
          </button>
        </div>
      </BlankModal>
    </div>
  );
};

export default VIP;
