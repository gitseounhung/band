import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import chatUiReducer from './slices/chat-ui'
import uiReducer from './slices/ui'
import themeReducer from './slices/theme'
import sessionReducer from './slices/session'

const persistConfig = {
  key: 'zioject',
  whitelist: [
    'chatUI','theme'
  ],
  blacklist: [
    'ui','user'
  ],
  storage,
}

export const rootReducer = combineReducers({
  chatUI: chatUiReducer,
  ui: uiReducer,
  theme: themeReducer,
  session: sessionReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})
export const persistor = persistStore(store)