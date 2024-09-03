import { PersistGate } from "redux-persist/integration/react";
import { persistor } from '@zio/main/src/redux/store'

const PersistProvider = ({ children }) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  )
}

export default PersistProvider