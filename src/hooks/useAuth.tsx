import { useContext } from "react";
import AuthContext from "../context/auth";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
