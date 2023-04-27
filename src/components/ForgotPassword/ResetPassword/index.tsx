import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import AuthService from "../../../service/auth";
import useModal from "../../../hooks/useModal";
import { STEPS } from "../helper";
import { resetPasswordSchema } from "./resetPasswordSchemma";

function ResetPassword({
  token,
  className,
  refStep,
  previousStep,
  resetRef,
}: any) {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, []);

  const reSignIn = () => {
    navigate("/login");
  };

  const handleSubmit = async (values: any) => {
    const params = {
      token: token,
      password: values.password,
    };
    setIsSubmitting(true);
    try {
      const response: any = await AuthService.resetPassword(params);
      if (response?.data?.data) {
        // handleOpenAlertSucess(
        //   "Cập nhật thành công! Vui lòng đăng nhập lại.",
        //   reSignIn
        // );
      }
    } catch (err) {
      setErrMsg(err.response.data.message);
    } finally {
      setIsSubmitting(false);
      //   handleHiddenLoader();
    }
  };

  const formik: any = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema(),
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
      id="input-reset-password-form"
      ref={refStep}
    >
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <span
            className="text-2xl absolute top-2 left-4 hover:text-3xl cursor-pointer"
            onClick={() => {
              previousStep(STEPS.otp);
            }}
          >
            <BiArrowBack />
          </span>
          <div className="sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Tạo mật khẩu mới.
            </h1>
            <p className="leading-tight mb-6 mt-2 text-gray-900 dark:text-white">
              Vui lòng nhập mật khẩu mới để sử dụng.
            </p>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu
                </label>
                {formik.errors.password && formik.touched.password && (
                  <p
                    className={`mb-2 ml-2 text-sm font-light text-red-500`}
                    aria-live="assertive"
                  >
                    {formik.errors.password}
                  </p>
                )}
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`bg-gray-50 border ${
                    formik.errors.OTP ? "border-red-500" : "border-gray-300"
                  }  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Mật khẩu"
                  ref={resetRef}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu
                </label>
                {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword && (
                    <p
                      className={`mb-2 ml-2 text-sm font-light text-red-500`}
                      aria-live="assertive"
                    >
                      {formik.errors.confirmPassword}
                    </p>
                  )}
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className={`bg-gray-50 border ${
                    formik.errors.OTP ? "border-red-500" : "border-gray-300"
                  }  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Xác nhận mật khẩu"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
              </div>

              {errMsg && (
                <p
                  className={`text-center mb-2 ml-2 text-sm text-red-500`}
                  aria-live="assertive"
                >
                  {errMsg}
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

export default ResetPassword;
