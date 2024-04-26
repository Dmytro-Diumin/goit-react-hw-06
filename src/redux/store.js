import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
