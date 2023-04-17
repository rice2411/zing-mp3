import { createBrowserRouter, Outlet } from "react-router-dom";

import { AudioProvider } from "../context/audio";

import { AuthProvider } from "../context/auth";
import { ModalProvider } from "../context/modal";
import { ThemeProvider } from "../context/mode";
import AlbumPage from "../pages/album";
import ErrorPage from "../pages/error";
import ExplorePage from "../pages/explore";
import LayoutPage from "../pages/layout";
import Privacy from "../pages/privacy";
import Security from "../pages/security";
import SearchPage from "../pages/search";

import SongPage from "../pages/search/song";
import AllPage from "../pages/search/all";
import AritstPage from "../pages/search/artist";
import AlbumPageSearch from "../pages/search/album";
import VipPage from "../pages/vip";
import Payment from "../components/Payment";
import LibraryPage from "../pages/library";

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
        element: <LibraryPage />,
        path: "/mymusic",
      },
      {
        element: <AlbumPage />,
        path: "/album",
      },
      {
        element: <SearchPage />,
        path: "/tim-kiem",
        children: [
          { element: <AllPage />, path: "tat-ca" },
          { element: <SongPage />, path: "bai-hat" },
          { element: <AlbumPageSearch />, path: "playlist" },
          { element: <AritstPage />, path: "nghe-si" },
        ],
      },
    ],
  },
  {
    element: <Privacy />,
    path: "/dieu-khoan-su-dung",
  },
  {
    element: <Security />,
    path: "/chinh-sach-bao-mat",
  },
  {
    element: <VipPage />,
    path: "/mua-vip",
  },
  {
    element: <Payment />,
    path: "/thanh-toan",
  },
]);
