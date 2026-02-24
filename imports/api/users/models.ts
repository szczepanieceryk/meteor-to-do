import { Meteor } from "meteor/meteor";
export class UserModel implements Meteor.User {
  _id!: string;
  username?: string;
  emails!: Meteor.UserEmail[];
  createdAt!: Date;
  profile?: string;
  services?: {
    password: string;
  };
}

// GET METHODS

// SET METHODS
export interface MethodSetUserCreateModel {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  userName: string;
}
