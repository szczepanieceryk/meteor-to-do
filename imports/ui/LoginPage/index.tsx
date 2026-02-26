import { Meteor } from "meteor/meteor";
import { Space, Button, Typography, message, Input } from "antd";
import React, { useState } from "react";
import { useLocation } from "wouter";
import { publicRoutes } from "/utils/constants/routes";
import { LoadingOutlined } from "@ant-design/icons";
import { errorResponse } from "/utils/errors";

const LoginPage: React.FC = () => {
  const [location, navigate] = useLocation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggingIn, setLoggingIn] = useState<boolean>(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async () => {
    const cleanEmail = email.trim();

    if (!emailRegex.test(cleanEmail)) {
      // Show an error message
      return message.error("Email is not valid");
    }

    if (password.length < 8) {
      return message.error("Password must be at least 8 characters long");
    }

    setLoggingIn(true);

    Meteor.loginWithPassword(cleanEmail, password, (error: Meteor.Error) => {
      setLoggingIn(true);

      if (error) {
        errorResponse(error, "An error occurred while logging in");
      }

      navigate(publicRoutes.home.path);
    });
  };

  if (loggingIn) {
    return <LoadingOutlined />;
  }

  return (
    <Space orientation="vertical">
      <Typography.Title level={2}>Sign in to your account</Typography.Title>

      <Input
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input.Password
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="primary" loading={loggingIn} onClick={handleSubmit}>
        Log In
      </Button>

      <Typography.Text>
        Don't have an account?{" "}
        <Button type="link" onClick={() => navigate(publicRoutes.signup.path)}>
          Create one
        </Button>
      </Typography.Text>
    </Space>
  );
};

export default LoginPage;
