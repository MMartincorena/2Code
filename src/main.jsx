import React from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./auth/context";
import { BrowserRouter } from "react-router-dom";
import { AppRedux } from "./redux/AppRedux";
import { AppMui } from "./mui/AppMui";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRedux>
      <AppMui>
        <BrowserRouter>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </BrowserRouter>
      </AppMui>
    </AppRedux>
  </React.StrictMode>
);
