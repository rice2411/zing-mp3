import { createBrowserRouter, Outlet } from "react-router-dom";

import { AuthProvider } from "../context/auth";
import { ModalProvider } from "../context/modal";
import { ThemeProvider } from "../context/mode";
import ErrorPage from "../pages/error";
import ExplorePage from "../pages/explore";
import LayoutPage from "../pages/layout";

const Layout = () => {
  return (
    <ModalProvider>
      <AuthProvider>
        <ThemeProvider>
          <LayoutPage></LayoutPage>
        </ThemeProvider>
      </AuthProvider>
    </ModalProvider>
  );
};
export default createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ExplorePage />,
        path: "/",
      },
    ],
  },
]);
