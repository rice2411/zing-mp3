import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/auth";
import { ModalProvider } from "./context/modal";
import { ModeProvider } from "./context/mode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <AuthProvider>
          <ModeProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </ModeProvider>
        </AuthProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
