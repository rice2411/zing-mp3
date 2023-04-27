import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import OAuth2Service from "../../../service/oauth2";
import UserService from "../../../service/user";
import { setToken, setUser } from "../../../utils/auth";
import useAuth from "../../../hooks/useAuth";

const Oauth2 = () => {
  const { id } = useParams();
  const {
    isOpenModalLogin,
    handleCloseModalLogin,
    setIsAuthenticated,
    setUserProfile,
  }: any = useAuth();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const provider = query.get("provider");
  const tokenQuery = query.get("token");
  const handleLoginOauth2 = async () => {
    try {
      const params = {
        token: tokenQuery,
        provider: provider,
      };
      const response: any = await OAuth2Service.login(params);
      const { token } = response?.data?.data;

      if (response?.data?.data) {
        setIsAuthenticated(true);

        setToken(token);
        const response2: any = await UserService.getMe();
        if (response2?.data?.data) {
          setUserProfile(response2?.data?.data);
          setUser(JSON.stringify(response2?.data?.data));
          window.close();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleLoginOauth2();
  }, []);
  return <h1>Hello {id}</h1>;
};

export default Oauth2;
