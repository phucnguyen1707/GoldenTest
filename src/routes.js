import { Navigate, useRoutes } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import Product from "./product/Product";
import ProductDetail from "./product/ProductDetail";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",

      children: [
        { path: "", element: <Product /> },
        // { path: "create", element: <EventAdd /> },
        // { path: "detail/:id", element: <ProductDetail /> },
        // { path: "edit/:id", element: <EventEdit /> },
      ],
    },
  ]);

  return routes;
}
