import React from "react";
import ReactDOM from "react-dom/client";

import { CssBaseline } from "@mui/material";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

import "./index.css";
import { AuthProvider } from "./auth/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
