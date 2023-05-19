import React, { useEffect } from "react";
import Explore from "../../components/Explore";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PaymentService from "../../service/payment";
import UserService from "../../service/user";
import useAuth from "../../hooks/useAuth";
import { setUser } from "../../utils/auth";

const ExplorePage = () => {
  const [searchParams] = useSearchParams();
  const apptransid = searchParams.get("apptransid");
  const navigate = useNavigate();
  const { setUserProfile }: any = useAuth();
  const handlePurchase = async () => {
    try {
      const resposne: any = await PaymentService.check({
        app_trans_id: apptransid,
        description: "123",
      });
      const rawData = resposne?.data?.data;
      if (rawData) {
        if (rawData.return_code == 1) {
          const response: any = await UserService.getMe();
          if (response?.data?.data) {
            setUserProfile(response?.data?.data);
            setUser(JSON.stringify(response?.data?.data));
            navigate("/");
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (apptransid) handlePurchase();
  }, [apptransid]);
  return <Explore />;
};

export default ExplorePage;
