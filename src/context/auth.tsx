import { useState, createContext, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import cookie from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [page, setPage] = useState("signin");
  const [loginModal, setLoginModal] = useState({});
  const [signUpModal, setSignUpModal] = useState({});
  const handleLoginModal = (data: SetStateAction<{}>) => {
    setLoginModal(data);
  };

  const handleSignUpModal = (data: SetStateAction<{}>) => {
    setSignUpModal(data);
  };

  const handlePage = (name: SetStateAction<string>) => {
    setPage(name);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(
    cookie.get("token") ? true : false
  );

  const [userProfile, setUserProfile] = useState(
    JSON.parse(cookie.get("profile") || `{"name":"default"}`) || {}
  );

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        page,
        isAuthenticated,
        loginModal,
        signUpModal,
        userProfile,
        handleLogout,
        handlePage,
        handleAuthenticated,
        handleLoginModal,
        handleSignUpModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
