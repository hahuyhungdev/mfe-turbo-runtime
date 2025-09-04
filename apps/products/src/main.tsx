import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Only render if running standalone
if (document.getElementById("root")) {
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
}
