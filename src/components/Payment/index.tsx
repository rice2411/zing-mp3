import React from "react";
import "./css/blue.css";
// import "./css/bootstrap.min.css";
const Payment = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    body {\n        padding:20px;\n        color:#293C56;\n    }\n    \n    .icheckbox_flat-blue, .iradio_flat-blue {\n        top:-2px;\n        margin-right:5px;\n    }\n    .txtGray {color:#798594;}\n    .bank-group {margin-left: 30px; max-width: 850px;}\n    a, a:hover, a:visited, a:link {text-decoration: none!important; color:#293C56;}\n    a.bank-item {\n        display: inline-block;\n        width:180px;\n        height:48px;\n        padding:10px;\n        border-radius:4px;\n        border:2px solid #f1f1f1;\n        position:relative;\n        vertical-align: top;\n        margin-right:10px;\n        margin-bottom:15px;\n        font-size:13px;\n    }\n    \n    a.bank-item .checkmark {\n        display:none;\n        width:20px;\n        height: 20px;\n    }\n    a.bank-item.selected .checkmark {\n        display: block;\n        position: absolute;\n        top:-10px;\n        right:-10px;\n        margin-right:0;\n    }\n    a.bank-item.selected, a.bank-item:hover  {\n        border:2px solid #04BE04;\n    }\n    \n    a.bank-item img {\n        vertical-align: middle!important;\n        display:inline-block;\n        margin-right:5px;\n    }\n",
        }}
      />
      <p>Vui lòng chọn hình thức thanh toán:</p>
      <div className="mb-1">
        <label className="flex">
          <input type="radio" name="iCheck" className="iradio_flat-blue mr-2" />{" "}
          Ví
          <img src="./paymentImage/logo-zalopay.svg " className="ml-1" alt="" />
        </label>
      </div>
      <div className="mb-1">
        <label>
          <input type="radio" name="iCheck" className="iradio_flat-blue" />{" "}
          Visa, Mastercard, JCB{" "}
          <span className="txtGray">(qua cổng ZaloPay)</span>
        </label>
      </div>
      <div className="mb-1">
        <label>
          <input type="radio" name="iCheck" className="iradio_flat-blue" /> Thẻ
          ATM <span className="txtGray">(qua cổng ZaloPay)</span>
        </label>
      </div>
      <div className="bank-group">
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-vtb.svg" alt="" /> Vietinbank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-varb.svg" alt="" /> Agribank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-vcb.svg" alt="" /> Vietcombank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-bidv.svg" alt="" /> BIDV
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-dab.svg" alt="" /> Đông Á Bank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-scb.svg" alt="" /> Sacombank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-acb.svg" alt="" /> ACB
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-mb.svg" alt="" /> MBBank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-tcb.svg" alt="" /> Techcombank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-vpb.svg" alt="" /> VPBank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-eib.svg" alt="" /> Eximbank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-vib.svg" alt="" /> VIB
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-hdb.svg" alt="" /> HDBank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-ojb.svg" alt="" /> Oceanbank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-shb.svg" alt="" /> SHB
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-msb.svg" alt="" /> Maritime Bank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-seab.svg" alt="" /> SeABank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-abb.svg" alt="" /> ABBank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-tpb.svg" alt="" /> TPBank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-sgcb.svg" alt="" /> TMCP Sài Gòn
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-lpb.svg" alt="" /> Liên Việt Post Bank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-sgb.svg" alt="" /> SaigonBank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-ocb.svg" alt="" /> OCB
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-nab.svg" alt="" /> Nam Á Bank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-vab.svg" alt="" /> Việt Á Bank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-bvb.svg" alt="" /> Bảo Việt Bank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-gpb.svg" alt="" /> GPBank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-bab.svg" alt="" /> Bắc Á Bank
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
        <a href="#" className="bank-item">
          <img src="./paymentImage/bank-vccb.svg" alt="" /> Ngân hàng Bản Việt
          <img
            src="./paymentImage/check-mark.svg"
            alt=""
            className="checkmark"
          />
        </a>
      </div>
      <a
        href="#"
        className="bg-[#04BE04] w-[300px] flex justify-center items-center h-[44px] rounded text-white"
      >
        THANH TOÁN
      </a>
    </>
  );
};

export default Payment;
