import { Mongo } from "meteor/mongo";
import UserProfileModel from "./models";
import { AvailableCollectionNames } from "../utils/models";

const UserProfileCollection = new Mongo.Collection<UserProfileModel>(
  AvailableCollectionNames.USER_PROFILE,
);

export default UserProfileCollection;
