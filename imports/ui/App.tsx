import { ConfigProvider, theme } from "antd";
import React from "react";
import { Route, Switch } from "wouter";
import { useTracker } from "meteor/react-meteor-data";
import { protectedRoutes, publicRoutes } from "/utils/constants/routes";
import { Meteor } from "meteor/meteor";
import { LoadingOutlined } from "@ant-design/icons";
export type UserID = string | undefined | null;

const App = () => {
  const userId: UserID = useTracker(() => Meteor.userId());

  if (userId == null) {
    return (
      <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
        <Switch>
          {Object.values(publicRoutes).map((route) => (
            <Route key={route.path} path={route.path}>
              {route.element}
            </Route>
          ))}
        </Switch>
      </ConfigProvider>
    );
  }

  if (userId === undefined) return <LoadingOutlined />;

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Switch>
        {Object.values(publicRoutes).map((route) => (
          <Route key={route.path} path={route.path}>
            {route.element}
          </Route>
        ))}

        {Object.values(protectedRoutes).map((route) => (
          <Route key={route.path} path={route.path}>
            {route.element}
          </Route>
        ))}
      </Switch>
    </ConfigProvider>
  );
};

export default App;
