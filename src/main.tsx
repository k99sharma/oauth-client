import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-n5flfjks3q56tqob.us.auth0.com"
      clientId="XETWa09XSO8j4XWWupiUdaFHlqJqhB2j"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/auth",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
