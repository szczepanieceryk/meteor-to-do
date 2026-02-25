import Input from "antd/es/input/Input";
import React from "react";
import { Space, Button, Typography, message } from "antd";
import { useState } from "react";
import { useLocation } from "wouter";
import { publicRoutes } from "/utils/constants/routes";
import { Meteor } from "meteor/meteor";
import { MethodSetUserCreateModel } from "/imports/api/users/models";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [location, navigate] = useLocation();
  const [loggingIn, setLoggingIn] = useState<boolean>(false);

  const handleSubmit = async () => {
    const cleanEmail = email.trim();
    const cleanUserName = userName.trim();
    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();

    if (!emailRegex.test(cleanEmail)) {
      // Show an error message
      return message.error("Email is not valid");
    }

    if (password.length < 8) {
      return message.error("Password must be at least 8 characters long");
    }

    if (cleanUserName.length < 3) {
      return message.error("User Name must be at least 3 characters long");
    }

    if (cleanFirstName.length === 0) {
      return message.error("First Name is required");
    }

    setLoggingIn(true);

    try {
      const data: MethodSetUserCreateModel = {
        email: cleanEmail,
        password,
        firstName: cleanFirstName,
        lastName: cleanLastName,
        userName: cleanUserName,
      };

      await Meteor.callAsync("set.user.create", data);
    } catch (error) {
      setLoggingIn(false);
      return message.error("An error occurred while creating the account");
    }
  };

  return (
    <Space orientation="vertical">
      <Typography.Title level={2}>Create your account</Typography.Title>
      <Input
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        value={userName}
        placeholder="User Name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        value={firstName}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="primary" onClick={handleSubmit}>
        Sign up
      </Button>

      <Typography.Text>
        Already have an account?{" "}
        <Button type="link" onClick={() => navigate(publicRoutes.login.path)}>
          Log in
        </Button>
      </Typography.Text>
    </Space>
  );
};

export default SignUpPage;
