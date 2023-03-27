import { createBrowserRouter, Outlet } from "react-router-dom";

import { AudioProvider } from "../context/audio";

import { AuthProvider } from "../context/auth";
import { ModalProvider } from "../context/modal";
import { ThemeProvider } from "../context/mode";
import AlbumPage from "../pages/album";
import ErrorPage from "../pages/error";
import ExplorePage from "../pages/explore";
import LayoutPage from "../pages/layout";

const Layout = () => {
  return (
    <ModalProvider>
      <AuthProvider>
        <ThemeProvider>
          <AudioProvider>
            <LayoutPage></LayoutPage>
          </AudioProvider>
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
      {
        element: <AlbumPage />,
        path: "/album",
      },
    ],
  },
]);
