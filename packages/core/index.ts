
import { makeInstaller } from "@zm-element/utils";
import component from "./component";
import "@zm-element/theme/index.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
import printLogo from "./printLogo";


printLogo()
library.add(fas)
const installer = makeInstaller(component);

export default installer
export * from '@zm-element/components'
export * from '@zm-element/locale'

// export * from "../components";
