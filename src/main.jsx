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
import "./index.css";
import "./App.css"

// TEST MODE: No Router. No Analytics. Just text.
ReactDOM.createRoot(document.getElementById("root")).render(
  <div style={{ color: 'red', fontSize: '50px', textAlign: 'center', marginTop: '50px' }}>
    <h1>✅ WEBSITE IS WORKING</h1>
    <p>The problem is in the Router.</p>
  </div>
)