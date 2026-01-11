import React from "react";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import Layout from "../layout/layout"
import Home from "../pages/Home"
import News from "../pages/News"
import IPOs from "../pages/IPOs"
import Brokers from "../pages/Broker";


import NotFound from "../pages/NotFound"
import GlobalImpact from "../pages/GlobalImpact"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      
      {/* Default (Home) */}
      <Route index element={<Home />} />
      <Route path="brokers" element={<Brokers />} />

      <Route path="news" element={<News />} />
      <Route path="ipos" element={<IPOs />} />
      <Route path="global-impact" element={<GlobalImpact />} />
      
      

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Route>
  )
)

export default router
/**
 📁 router/ — NAVIGATION LOGIC (MODERN REACT ROUTER)
Purpose

Defines how URLs map to pages.

In modern React Router (v6.4+):

Routes are data

UI is rendered from route definitions

Your router decides:

Which page loads for which path

Which layout wraps which pages

What happens on invalid URLs (404)

Why router has its own folder

Keeps App logic clean

Makes routing readable

Supports loaders & actions later

Interview line:

“I use React Router’s data router with layout routes for scalable navigation.”
 */