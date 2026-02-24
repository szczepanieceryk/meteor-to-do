import { Meteor } from "meteor/meteor";

export const clientContentError = (msg: string) => {
  throw new Meteor.Error(400, "Client Error", msg);
};

export const noAuthError = (msg?: string) => {
  throw new Meteor.Error(
    401,
    "Not Authorized",
    msg ?? "You are not authorized to perform this action.",
  );
};

export const clientConnectionError = (msg?: string) => {
  throw new Meteor.Error(
    404,
    "Not Found",
    msg ?? "The requested resource was not found.",
  );
};

export const internalServerError = (msg: string) => {
  throw new Meteor.Error(500, "Internal Server Error", msg);
};
