// import React from "react"
// import ReactDOM from "react-dom/client"
// import { RouterProvider } from "react-router-dom"
// import "./index.css";

// import router from "./router/router"
// import "./App.css"

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
// 1. Import Analytics safely
import ReactGA from "react-ga4";
import { HelmetProvider } from 'react-helmet-async';

import "./index.css";
import router from "./router/router"
import "./App.css"

// 2. Initialize Safely (Inside a try-catch block)
try {
  // Check if we are in a browser environment
  if (typeof window !== 'undefined') {
    ReactGA.initialize("G-TLXRP6ML");
    console.log("Analytics Initialized ✅");
  }
} catch (error) {
  console.error("Analytics Failed to Start (App will still run) ⚠️", error);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      {/* If router is broken, the app will break here. */}
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)