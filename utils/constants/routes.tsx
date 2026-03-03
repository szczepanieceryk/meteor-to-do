import React from "react";
import LoginPage from "../../imports/ui/LoginPage";
import HomePage from "../../imports/ui/HomePage";
import NotFoundPage from "/imports/ui/NotFoundPage";
import SignUpPage from "/imports/ui/SignUpPage";

interface PublicRoute {
  path: string;
  title: string;
  element: React.ReactNode;
}

export const publicRoutes: Record<string, PublicRoute> = {
  login: {
    path: "/login",
    title: "Login",
    element: (<LoginPage />) as React.ReactNode,
  },
  signup: {
    path: "/signup",
    title: "SignUp",
    element: (<SignUpPage />) as React.ReactNode,
  },
  home: {
    path: "/",
    title: "Home",
    element: (<HomePage />) as React.ReactNode,
  },
  default: {
    path: "*",
    title: "LogIn",
    element: (<LoginPage />) as React.ReactNode,
  },
};

export const navigationRoutes = {
  home: {
    path: "/",
    title: "Home",
    element: (<HomePage />) as React.ReactNode,
  },
  signup: {
    path: "/signup",
    title: "SignUp",
    element: (<SignUpPage />) as React.ReactNode,
  },
  login: {
    path: "/login",
    title: "Login",
    element: (<LoginPage />) as React.ReactNode,
  },
};

export const protectedRoutes = {
  default: {
    path: "/404",
    element: (<NotFoundPage />) as React.ReactNode,
  },
};
