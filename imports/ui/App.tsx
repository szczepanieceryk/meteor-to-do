import { ConfigProvider, theme } from "antd";
import React from "react";
import { Route, Switch } from "wouter";
import { publicRoutes } from "/utils/constants/routes";

const App = () => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Switch>
        {Object.values(publicRoutes).map((route) => (
          <Route key={route.path} path={route.path}>
            {route.element}
          </Route>
        ))}
      </Switch>
    </ConfigProvider>
  );
};

export default App;
