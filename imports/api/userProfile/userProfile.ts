import { Mongo } from "meteor/mongo";
import UserProfileModel from "./models";

const UserProfileCollection = new Mongo.Collection<UserProfileModel>(
  "user_profile",
);

export default UserProfileCollection;
