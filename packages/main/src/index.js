import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}>
          <App/>
        </RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
