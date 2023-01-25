import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: "*/auth",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
