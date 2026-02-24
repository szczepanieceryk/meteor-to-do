import { Meteor } from "meteor/meteor";
export class UserModel implements Meteor.User {
  _id!: string;
  username?: string;
  emails!: Meteor.UserEmail[];
  createdAt!: Date;
  profile!: string;
  services?: {
    password: string;
  };
}
