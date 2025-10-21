import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@pages/home/home";
import "@src/main.scss";
import SecondaryHeader from "@/components/SecondaryHeader/secondaryHeader";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SecondaryHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
