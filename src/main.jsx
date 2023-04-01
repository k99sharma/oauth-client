// importing css
import "./index.css";

// importing libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

// importing components
import App from "./App";

// importing configs
import CONFIG from "./config/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={CONFIG.AUTH0_DOMAIN}
      clientId={CONFIG.AUTH0_CLIENT}
      authorizationParams={{
        redirect_uri: "http://localhost:5173/profile",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
