
import { makeInstaller } from "@zm-element/utils";
import component from "./component";
import "@zm-element/theme/index.css"

const installer = makeInstaller(component);

export default installer
export * from '@zm-element/components'
