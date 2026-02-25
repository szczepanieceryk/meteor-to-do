import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { MethodSetUserCreateModel, UserModel } from "../models";
import { check, Match } from "meteor/check";
import { stringContainsOnlyLettersAndNumbers } from "/utils/checks";
import { clientConnectionError, clientContentError } from "/utils/serverError";
import UserProfileCollection from "../../userProfile/userProfile";

Meteor.methods({
  "set.user.create": async ({
    email,
    password,
    firstName,
    lastName,
    userName,
  }: MethodSetUserCreateModel) => {
    check(email, String);
    check(firstName, String);
    check(lastName, Match.Optional(String));
    check(userName, String);
    check(password, String);

    if (!stringContainsOnlyLettersAndNumbers(userName, true)) {
      return clientContentError(
        "Usernames can only contain letters and numbers.",
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanEmail: string = email.trim();
    if (!emailRegex.test(cleanEmail)) {
      return clientContentError("Email is invalid.");
    }

    if (password.length < 8) {
      return clientConnectionError(
        "Password must be at least 8 characters long.",
      );
    }
    const cleanUserName: string = userName.trim();
    const existingUserName = await UserProfileCollection.findOneAsync({
      userName: `
      @${cleanUserName}`,
    });

    if (existingUserName) {
      return clientContentError("This username is already taken.");
    }

    await Accounts.createUserAsync({
      email: cleanEmail,
      password: password,
    });

    const newUser =
      ((await Meteor.users.findOneAsync({
        "emails.address": cleanEmail,
      })) as UserModel) || undefined;

    if (!newUser) return clientContentError("New user");

    await UserProfileCollection.insertAsync({
      userId: newUser._id,
      firstName,
      lastName,
      userName: `
      @${cleanUserName}`,
    });
  },
});
