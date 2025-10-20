import React from "react";
import ReactDOM from "react-dom/client";
import "@src/main.scss";
import { Partners } from "./components/Partners/Partners";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Partners />
  </React.StrictMode>
);
