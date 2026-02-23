import React from "react";
import LoginPage from "../../imports/ui/LoginPage";
import HomePage from "../../imports/ui/HomePage";
import NotFoundPage from "/imports/ui/NotFoundPage";
import SignUpPage from "/imports/ui/SignUpPage";

export const publicRoutes = {
  login: {
    path: "/login",
    element: (<LoginPage />) as React.ReactNode,
  },
  signup: {
    path: "/signup",
    element: (<SignUpPage />) as React.ReactNode,
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

export const protectedRoutes = {
  default: {
    path: "/404",
    element: (<NotFoundPage />) as React.ReactNode,
  },
};
