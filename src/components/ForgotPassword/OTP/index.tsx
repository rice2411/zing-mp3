import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import MailService from "../../../service/mail";
import { STEPS } from "../helper";
import { OTPSchema } from "./otpschema";

function OTP({
  setToken,
  email,
  className,
  refStep,
  nextStep,
  previousStep,
  time,
  setTime,
}: any) {
  const [errMsg, setErrMsg] = useState("");
  const [text, setText] = useState("Gửi lại mã xác thực");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, []);

  function formatTime(time: any) {
    var m: any = ("0" + (Math.floor(time / 60) % 60)).slice(-2),
      s = ("0" + (time % 60)).slice(-2);
    return (m > 0 ? m + ":" : "") + (time > 60 ? s : "00:" + s);
  }

  const handleSubmit = async (values: any) => {
    const params = {
      email: email,
      otp: values.OTP,
    };
    setIsSubmitting(true);
    try {
      const response: any = await MailService.SendOtp(params);
      if (response?.data?.data) {
        setToken(response.data.data.token);
        nextStep(STEPS.resetPassword);
      }
    } catch (err) {
      setErrMsg(err.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendMailAgain = async () => {
    if (time === 0) {
      setText("Chờ xíu!!");
      const params = {
        email: email,
      };
      try {
        const response: any = await MailService.SendMail(params);
        if (response?.data?.data) setTime(2);
      } catch (err) {
        console.log(err);
      } finally {
      }
    }
  };

  const formik: any = useFormik({
    initialValues: {
      OTP: "",
    },
    validationSchema: OTPSchema(),
    onSubmit: handleSubmit,
  });

  const removeDarkMode = () => {
    document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    removeDarkMode();
  }, []);

  return (
    <section
      className={`bg-gray-50 dark:bg-gray-900 w-full" ${className}`}
      id="input-otp-form"
      ref={refStep}
    >
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <span
            className="text-2xl absolute top-2 left-4 hover:text-3xl cursor-pointer"
            onClick={() => {
              previousStep(STEPS.sendMail);
            }}
          >
            <BiArrowBack />
          </span>
          <div className={`sm:p-8`}>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Xác thực tài khoản.
            </h1>
            <p className="leading-tight mt-2 text-gray-900 dark:text-white">
              Vui lòng nhập mã OTP được gửi về trong hòm thư của bạn.{" "}
              <button
                className={`${
                  time
                    ? "text-red-500 "
                    : "text-indigo-600  hover:underline cursor-pointer"
                }`}
                onClick={sendMailAgain}
                disabled={isSubmitting}
              >
                {time ? formatTime(time) : text}
              </button>
            </p>

            <form
              className="space-y-4 md:space-y-6 mt-3"
              action="#"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="otp"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Nhập mã OTP
                </label>
                <input
                  type="text"
                  name="OTP"
                  id="otp"
                  className={`bg-gray-50 border ${
                    formik.errors.OTP ? "border-red-500" : "border-gray-300"
                  }  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="OTP"
                  onChange={formik.handleChange}
                  value={formik.values.OTP}
                />
              </div>

              {((formik.errors.OTP && formik.touched.OTP) || errMsg) && (
                <p
                  className={`text-center mb-2 ml-2 text-sm text-red-500`}
                  aria-live="assertive"
                >
                  {formik.errors.OTP || errMsg}
                </p>
              )}

              <div className="flex justify-between">
                <button
                  type="submit"
                  className={`${
                    isSubmitting
                      ? "bg-indigo-400"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  } group relative flex justify-center py-2 px-8 border border-transparent text-m font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  {isSubmitting ? "... Đang xác thực" : "Tiếp tục"}
                </button>
                <p className="text-sm font-light text-gray-900 dark:text-gray-400">
                  <Link
                    to={"/login"}
                    className="font-medium flex h-full justify-center items-center  text-indigo-600 hover:text-indigo-500"
                  >
                    Đăng nhập
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OTP;
