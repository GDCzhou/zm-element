import { makeInstaller } from "@zm-element/utils";
import components from "./component";

const installer = makeInstaller(components);

export * from "@zm-element/components";
export default installer;
