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
import ReactGA from "react-ga4";
import { HelmetProvider } from 'react-helmet-async';

// Your styles and router
import "./index.css";
import router from "./router/router"
import "./App.css"

// 1. Initialize Analytics (Use your Measurement ID)
ReactGA.initialize("G-TLXRP6ML"); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2. Wrap everything in HelmetProvider for SEO */}
    <HelmetProvider>
      {/* 3. Use your existing Router logic */}
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)