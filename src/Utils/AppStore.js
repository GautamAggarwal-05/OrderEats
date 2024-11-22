import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import cartReducer from "./cartSlice";
import { PersistGate } from "redux-persist/integration/react";

// Configuration for Redux Persist
const persistConfig = {
  key: "root", // Key to identify the persisted state
  storage, // Use localStorage for persistence
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

// Creating the store with the persisted reducer
const AppStore = configureStore({
  reducer: {
    cart: persistedReducer, // Using the persisted reducer for the cart state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['REGISTER'],  // Add your custom actions if needed
      },
    }),
});

const persistor = persistStore(AppStore); // Create persistor instance for your store

export { AppStore, persistor };
