import ConfigProvider from "./ConfigProvider.vue";
import { withInstall } from '@zm-element/utils'

export const ZConfigProvider = withInstall(ConfigProvider)

export * from './types'
export * from './hooks'
