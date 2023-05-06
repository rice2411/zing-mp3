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
import SongPageLibrary from "../pages/library/song";
import AlbumPageLibrary from "../pages/library/album";
import ArtistPage from "../pages/artist";
import ZingChartPage from "../pages/zingchart";
import HubPage from "../pages/hub";
import HubDetailPage from "../pages/hub/detail";
import Top100Page from "../pages/top100";
import NewSongPage from "../pages/newSong";
import OAuth2Page from "../pages/oauth2";
import ForgotPasswordPage from "../pages/forgotpassword/index,";
import Modal from "../shared/small_components/Modal";
import Playlistpage from "../pages/library/playlist";
import AllPageLibrary from "../pages/library/playlist/all";

import OwnPage from "../pages/library/playlist/own";
import AdminLayoutPage from "../pages/admin/layout";
import DashboarđPage from "../pages/admin/dashboard";
const AdminLayout = () => {
  return (
    <ModalProvider>
      <AuthProvider>
        <AdminLayoutPage></AdminLayoutPage>
      </AuthProvider>
    </ModalProvider>
  );
};
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
        children: [
          { element: <SongPageLibrary />, path: "" },
          { element: <AlbumPageLibrary />, path: "album" },
        ],
      },
      {
        element: <Playlistpage />,
        path: "/mymusic/playlist",
        children: [
          { element: <AllPageLibrary />, path: "" },
          { element: <OwnPage />, path: "cua-toi" },
        ],
      },
      {
        element: <HubPage />,
        path: "/hub",
        children: [],
      },

      {
        element: <OAuth2Page />,
        path: "/oauth2",
      },
      { element: <HubDetailPage />, path: "/hub/detail" },
      {
        element: <Top100Page />,
        path: "/top100",
      },
      {
        element: <NewSongPage />,
        path: "/moi-phat-hanh",
      },
      {
        element: <AlbumPage />,
        path: "/album",
      },
      {
        element: <ZingChartPage />,
        path: "/zing-chart",
      },
      {
        element: <ArtistPage />,
        path: "/nghe-si",
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
    element: (
      <ModalProvider>
        <Modal />
        <ForgotPasswordPage />
      </ModalProvider>
    ),
    path: "/forgotpassword",
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
    element: (
      <AuthProvider>
        <VipPage />
      </AuthProvider>
    ),
    path: "/mua-vip",
  },
  {
    element: <Payment />,
    path: "/thanh-toan",
  },
  {
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <DashboarđPage />,
        path: "/dashboard",
      },
    ],
  },
]);
