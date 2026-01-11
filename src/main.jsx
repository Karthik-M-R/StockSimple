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
import "./index.css";

// Check this path!
import router from "./router/router" 
import "./App.css"

// Safe Mode: No analytics, just render the app.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)