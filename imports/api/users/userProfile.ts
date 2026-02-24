import { Mongo } from "meteor/mongo";
import UserProfileModel from "../userProfile/methods/models";

const UserProfileCollection = new Mongo.Collection<UserProfileModel>(
  "user_profile",
);

export default UserProfileCollection;
