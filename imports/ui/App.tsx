import { Button, Menu, ConfigProvider, theme } from "antd";
import { Link } from "wouter";
import React from "react";
import { Route, Switch } from "wouter";
import { useTracker } from "meteor/react-meteor-data";
import {
  navigationRoutes,
  protectedRoutes,
  publicRoutes,
} from "/utils/constants/routes";
import { Meteor } from "meteor/meteor";
import { LoadingOutlined } from "@ant-design/icons";
import "/imports/ui/styles/tailwind.css";

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
    <ConfigProvider theme={{ algorithm: theme.lightAlgorithm }}>
      <Menu
        mode="horizontal"
        items={
          Object.values(navigationRoutes)?.map?.((route) => ({
            key: route.path,
            label: <Link to={route.path}>{route.title}</Link>,
          })) || []
        }
      />
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

      <Button
        onClick={() => {
          Meteor.logout();
        }}
      >
        Logout
      </Button>
    </ConfigProvider>
  );
};

export default App;
