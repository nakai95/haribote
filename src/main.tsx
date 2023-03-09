import React from "react";
import ReactDOM from "react-dom/client";

import "@/i18n/config";
import { App } from "./presentations/App";

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser");
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
