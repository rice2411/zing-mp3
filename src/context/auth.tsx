import { useState, createContext, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import cookie from "js-cookie";

import useModal from "../hooks/useModal";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const { handleModalBlank }: any = useModal();

  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);

  const navigate = useNavigate();

  const handleOpenModalLogin = () => {
    handleModalBlank({
      text: {
        title: "Đăng nhập",
      },
      onSubmit: () => {},
    });
    setIsOpenModalLogin(true);
  };
  const handleCloseModalLogin = () => {
    setIsOpenModalLogin(false);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(
    cookie.get("token") ? true : false
  );

  const [userProfile, setUserProfile] = useState(
    JSON.parse(cookie.get("user") || `{"avatar":"default.jpg"}`) || {}
  );

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userProfile,
        isOpenModalLogin,
        setIsAuthenticated,
        handleOpenModalLogin,
        handleCloseModalLogin,
        setUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
