import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer/Footer";
import "./styles/_variables.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);