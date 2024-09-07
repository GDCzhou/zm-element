import Message from "./methods";
import { withInstallFunction } from "@zm-element/utils";

export const ZMessage = withInstallFunction(Message, "$message");

export * from "./types";
