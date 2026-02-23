import React from "react";
import LoginPage from "../../imports/ui/LoginPage";
import HomePage from "../../imports/ui/HomePage";

export const publicRoutes = {
  login: {
    path: "/login",
    element: (<LoginPage />) as React.ReactNode,
  },
  signup: {
    path: "/signup",
    element: (<LoginPage />) as React.ReactNode,
  },
  home: {
    path: "/",
    element: (<HomePage />) as React.ReactNode,
  },
  default: {
    path: "*",
    element: (<LoginPage />) as React.ReactNode,
  },
};

export const protectedRoutes = {};
