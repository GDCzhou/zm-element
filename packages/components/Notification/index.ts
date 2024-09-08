import Notification from "./methods";
import { withInstallFunction } from "@zm-element/utils";

export const ZNotification = withInstallFunction(
  Notification,
  "$notify"
);

export * from "./types";
