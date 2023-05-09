import * as React from "react";
import { useState, useEffect } from "react";
import AdminNavbar from "./Navbar";
import AdminSidebar from "./SideBar";
import { ToastContainer } from "react-toastify";
import Modal from "../../../shared/small_components/Modal";
function AdminLayout({ ...props }: any) {
  return (
    <div className="overflow-x-hidden">
      <AdminNavbar />
      <div className="flex ">
        <AdminSidebar />
        <div className="pt-20 pr-5 w-full"> {props.children}</div>
      </div>
      <ToastContainer />
      <Modal />
    </div>
  );
}

export default AdminLayout;
