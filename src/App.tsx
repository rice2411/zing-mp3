import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/layout";
import { ROUTER } from "./router";
import "./styles/globals.scss";
function App() {
  return (
    <Routes>
      <Route path={ROUTER.INDEX} element={<LayoutPage />}></Route>
    </Routes>
  );
}

export default App;
