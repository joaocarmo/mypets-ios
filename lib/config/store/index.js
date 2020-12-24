/**
 * @format
 * @flow
 */

import { USE_REDUX_DEVTOOLS_LOCAL_SERVER } from 'utils/env'
import AsyncStorage from '@react-native-community/async-storage'
import appConfig from '../../../app.json'

const devToolsConfig = USE_REDUX_DEVTOOLS_LOCAL_SERVER
  ? {
      realtime: process.env.NODE_ENV === 'development',
      name: appConfig.name,
      hostname: 'localhost',
      port: 8000,
    }
  : {}

const persistConfig = {
  key: appConfig.name,
  storage: AsyncStorage,
  blacklist: [
    'cache',
    'formLogin',
    'formProfile',
    'formRegister',
    'formReport',
  ],
}

export { devToolsConfig, persistConfig }