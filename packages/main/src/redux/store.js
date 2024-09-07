import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import chatUiReducer from '@zio/shared/redux/slices/chat-ui'
import uiReducer from '@zio/shared/redux/slices/ui'
import themeReducer from '@zio/shared/redux/slices/theme'
import sessionReducer from '@zio/shared/redux/slices/session'
import bandReducer from './slices/band'
import roomReducer from './slices/room'

const persistConfig = {
  key: 'zioject',
  whitelist: [
    'chatUI','theme','band'
  ],
  blacklist: [
    'ui','session','room'
  ],
  storage,
}

export const rootReducer = combineReducers({
  chatUI: chatUiReducer,
  ui: uiReducer,
  theme: themeReducer,
  session: sessionReducer,
  band: bandReducer,
  room: roomReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store)