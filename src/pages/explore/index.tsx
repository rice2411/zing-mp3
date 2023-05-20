import React, { useEffect, useState } from "react";
import Explore from "../../components/Explore";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PaymentService from "../../service/payment";
import UserService from "../../service/user";
import useAuth from "../../hooks/useAuth";
import { setUser } from "../../utils/auth";
import Spinner from "../../shared/small_components/Loading/Spinner";

const ExplorePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const apptransid = searchParams.get("apptransid");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();
  const { setUserProfile }: any = useAuth();
  const handlePurchase = async () => {
    try {
      setIsLoading(true);
      const resposne: any = apptransid
        ? await PaymentService.ZaloPayCheckStatusTransaction({
            app_trans_id: apptransid,
            description: searchParams.get("description"),
          })
        : await PaymentService.MoMoPayCheckStatusTransaction({
            orderId: orderId,
            requestId: searchParams.get("requestId"),
            description: searchParams.get("orderInfo"),
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
        if (rawData.errorCode == 0) {
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
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (apptransid || orderId) handlePurchase();
  }, [apptransid, orderId]);
  return <>{isLoading ? <Spinner /> : <Explore />}</>;
};

export default ExplorePage;
