
import { makeInstaller } from "@zm-element/utils";
import component from "./component";
import "@zm-element/theme/index.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)
const installer = makeInstaller(component);

export default installer
export * from '@zm-element/components'
