import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/Admin/Layout";
import useAuth from "../../../hooks/useAuth";

const AdminLayoutPage = () => {
  const { userProfile }: any = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (userProfile.role != 2411) {
      navigate("/");
    }
  }, []);
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default AdminLayoutPage;
