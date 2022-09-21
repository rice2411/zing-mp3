import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../components/Layout";

const LayoutPage = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default LayoutPage;
