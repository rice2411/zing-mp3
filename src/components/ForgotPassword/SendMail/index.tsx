import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import { EmailSchema } from "./emailSchema";
import MailService from "../../../service/mail";
import { STEPS } from "../helper";

function SendMail({ setEmail, className, refStep, nextStep, emailRef }: any) {
  const checkRef = useRef(null);

  const [checkSubmit, setCheckSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, []);

  const handleSubmit = async (values: any) => {
    if (checkSubmit) {
      const params = {
        email: values.email,
      };
      setEmail(values.email);
      setIsSubmitting(true);
      try {
        const response: any = await MailService.SendMail(params);
        if (response?.data?.data) nextStep(STEPS.otp);
      } catch (err) {
        if (err?.response) {
          setErrMsg(err.response.data.message);
        }
      } finally {
        setIsSubmitting(false);
      }
    } else {
      checkRef.current.focus();
    }
  };

  const formik: any = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: EmailSchema(),
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
      ref={refStep}
      id="input-email-form"
    >
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className={`sm:p-8 `}>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Quên mật khẩu?
            </h1>
            <p className="leading-tight mb-6 mt-2 text-gray-900 dark:text-white">
              Vui lòng nhập email đã đăng ký của bạn
            </p>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border ${
                    formik.errors.username
                      ? "border-red-500"
                      : "border-gray-300"
                  }  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  ref={emailRef}
                />
              </div>

              {((formik.errors.email && formik.touched.email) || errMsg) && (
                <p
                  className={`text-center mb-2 ml-2 text-sm text-red-500`}
                  aria-live="assertive"
                >
                  {formik.errors.email || errMsg}
                </p>
              )}

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    checked={checkSubmit}
                    onChange={() => setCheckSubmit(!checkSubmit)}
                    ref={checkRef}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-900 dark:text-gray-300"
                  >
                    Tôi đồng ý với{" "}
                    <a
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      href="#"
                      target="blank"
                    >
                      Điều khoản và điều kiện
                    </a>
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
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

export default SendMail;
