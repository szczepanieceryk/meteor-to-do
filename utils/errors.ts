import { message } from "antd";
import { Meteor } from "meteor/meteor";
import React from "react";

export const errorResponse = (
  err: Meteor.Error,
  backupReason: string,
  setShowErrorModal?: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorPopupText?: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
  if (setShowErrorModal && setErrorPopupText) {
    setShowErrorModal(true);
    setErrorPopupText(err.details ?? err.reason ?? backupReason);
  } else {
    message.error(err.details ?? err.reason ?? backupReason);
  }
};
