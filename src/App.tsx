import React from "react";
import { Route, Routes } from "react-router-dom";
import Carousel from "./components/Carousel";
import Test from "./components/Index";
import LayoutPage from "./pages/layout";
import { ROUTER } from "./router";
import "./styles/globals.scss";
function App() {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        {/* <Route path={ROUTER.INDEX} element={<Test />}></Route> */}
        <Route path={ROUTER.INDEX} element={<Carousel />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
