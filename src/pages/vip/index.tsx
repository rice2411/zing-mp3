import React, { useEffect } from "react";
import Album from "../../components/Album";
import VIP from "../../components/Vip";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const VipPage = () => {
  const { userProfile }: any = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (userProfile.is_vip) navigate("/");
  }, []);
  return <VIP />;
};

export default VipPage;
