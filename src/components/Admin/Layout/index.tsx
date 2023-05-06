import * as React from "react";
import { useState, useEffect } from "react";
import AdminNavbar from "./Navbar";
import AdminSidebar from "./SideBar";
function AdminLayout({ ...props }: any) {
  return (
    <div className=" ">
      <AdminNavbar />
      <div className="flex ">
        <AdminSidebar />
        <div className="pt-20 pr-5 w-full"> {props.children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
