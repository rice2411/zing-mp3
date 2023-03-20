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

const LoginModal = () => {
  const {
    isOpenModalLogin,
    handleCloseModalLogin,
    setIsAuthenticated,
    setUserProfile,
  }: any = useAuth();
  const { styles }: any = useTheme();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values: any) => {
    try {
      const params = {
        username: values.username,
        password: values.password,
      };
      setIsLoading(true);
      const responseAuth: any = await AuthService.login(params);
      if (responseAuth?.data?.data) {
        setIsAuthenticated(true);
        handleCloseModalLogin();
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
        isShow={isOpenModalLogin}
        handleClose={() => {
          handleCloseModalLogin();
          setErrorMessage("");
        }}
        className=""
      >
        <div className="flex flex-col justify-center">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            // validationSchema={loginSchema()}
            onSubmit={handleLogin}
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
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium"
                  >
                    Tên đăng nhập{" "}
                  </label>
                  <Field
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tên đăng nhập"
                    onChange={handleChange}
                    required
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
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="">
                        Ghi nhớ đăng nhập
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Quên mật khẩu
                  </a>
                </div>
                {errorMessage ? (
                  <p className="text-red-500 text-center">{errorMessage}</p>
                ) : (
                  ""
                )}
                <Button
                  text={"Đăng nhập"}
                  className={`w-full !text-white ${styles.button.backgroundColor} focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center   `}
                />

                <p className="text-sm font-light ">
                  Chưa có tài khoản?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Đăng ký
                  </a>
                </p>
              </Form>
            )}
          </Formik>

          <div className="flex  justify-center items-center">
            <ButtonIcon
              text={"Đăng nhập với Google"}
              className="border border-gray-500 w-[200px] mt-3 rounded bg-white  px-3 py-2"
              id="google"
              //onClick={handleGoogleLogin}
            >
              <FcGoogle className="bg-white rounded-full" />
            </ButtonIcon>
            <ButtonIcon
              className="border border-gray-500  w-[200px]  mt-3 rounded bg-white  px-3 py-2"
              id="facebook"
              // onClick={handleFacebookLogin}
            >
              <BsFacebook className="text-sky-500  bg-white rounded-full" />
            </ButtonIcon>
            <ButtonIcon
              text={"Đăng nhập với GitHub"}
              className="border border-gray-500  w-[200px]  mt-3 rounded bg-white  px-3 py-2"
              id="github"
              // onClick={handleGitHubLogin}
            >
              <FaGithub className=" rounded-full text-black" />
            </ButtonIcon>
          </div>
        </div>
      </BlankModal>
    </>
  );
};

export default LoginModal;
