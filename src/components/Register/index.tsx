import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";
import AuthService from "../../service/auth";
import UserService from "../../service/user";
import Button from "../../shared/small_components/Button/Basic";
import ButtonIcon from "../../shared/small_components/Button/Icon";
import Loader from "../../shared/small_components/Loading/Spinner";
import BlankModal from "../../shared/small_components/Modal/Blank";
import { setToken, setUser } from "../../utils/auth";
import OAuth2Service from "../../service/oauth2";
import { registerSchema } from "./registerSchema";
import Scrollbar from "../../shared/small_components/Scrollbar";

const RegisterModal = () => {
  const {
    isOpenModalRegister,
    handleCloseModalRegister,
    handleOpenModalLogin,
    setIsAuthenticated,
    setUserProfile,
  }: any = useAuth();
  const { styles }: any = useTheme();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (values: any) => {
    try {
      const params = {
        username: values.username,
        password: values.password,
        email: values.email,
      };
      setIsLoading(true);
      const responseAuth: any = await AuthService.register(params);
      if (responseAuth?.data?.data) {
        setIsAuthenticated(true);
        handleCloseModalRegister();
        setToken(responseAuth?.data?.data.token);
        const response: any = await UserService.getMe();
        if (response?.data?.data) {
          setUserProfile(response?.data?.data);
          setUser(JSON.stringify(response?.data?.data));
        }
      }
    } catch (err) {
      if (err?.response) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage("Hệ thống lỗi!!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <BlankModal
        isShow={isOpenModalRegister}
        handleClose={() => {
          handleCloseModalRegister();
          setErrorMessage("");
        }}
        className="w-[600px] "
      >
        <div className="flex flex-col justify-center ">
          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              repeatPassword: "",
            }}
            validationSchema={registerSchema()}
            onSubmit={handleRegister}
          >
            {({
              errors,
              touched,
              values,
              setFieldValue,
              handleChange,
            }: any) => (
              <Form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium"
                  >
                    Tên đăng nhập{" "}
                  </label>
                  <Field
                    type="username"
                    name="username"
                    id="username2"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tên đăng nhập"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium "
                  >
                    Mật khẩu
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password2"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                  />
                </div>{" "}
                <div>
                  <label
                    htmlFor="repeatPassword"
                    className="block mb-2 text-sm font-medium "
                  >
                    Nhập lại mật khẩu
                  </label>
                  <Field
                    type="password"
                    name="repeatPassword"
                    id="repeatPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                  />
                </div>
                <Button
                  text={"Đăng ký"}
                  className={`w-full !text-white ${styles.button.backgroundColor} focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center   `}
                />
                <p
                  className="text-sm font-light cursor-pointer "
                  onClick={() => {
                    handleOpenModalLogin();
                    handleCloseModalRegister();
                  }}
                >
                  Đã có tài khoản?{" "}
                  <span className="font-medium text-primary-600 hover:underline dark:text-primary-500 ">
                    Đăng nhập
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </BlankModal>
    </>
  );
};

export default RegisterModal;
